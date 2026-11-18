import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import * as THREE from 'three';
import { HOTSPOTS_DATA } from '../data/researchData';
import { SLIDES } from '../data/slidesData';

/**
 * Procedural Realistic Three.js 3D Model of the ELO Child Companion Robot
 * Engineered specifically for high-end presentation mode and smooth camera choreography.
 */
export const EloCanvas3D = forwardRef(({
  currentSlideIndex = 0,
  expression = 'happy',
  selectedHotspot = null,
  isRobotPaused = false,
  isPresentation = true
}, ref) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const eloGroupRef = useRef(null);
  const headGroupRef = useRef(null);
  const headBoxGroupRef = useRef(null);
  const wheelsRef = useRef([]);
  const eyeCanvasRef = useRef(null);
  const eyeTextureRef = useRef(null);
  const animFrameRef = useRef(null);

  // Interaction & Orbit
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const isDraggingRef = useRef(false);
  const previousMousePosRef = useRef({ x: 0, y: 0 });
  const userRotationRef = useRef({ x: 0.1, y: -0.3 });

  // Eye Animation State
  const eyeStateRef = useRef({
    currentExpression: expression,
    isBlinking: false,
    blinkProgress: 0,
    lastBlinkTime: Date.now(),
    nextBlinkInterval: 3200,
    saccadeX: 0,
    saccadeY: 0,
    lastSaccadeTime: Date.now()
  });

  // Camera tween system
  const cameraTweenRef = useRef({
    active: false,
    startTime: 0,
    duration: 1200,
    startPos: new THREE.Vector3(),
    endPos: new THREE.Vector3(),
    startTarget: new THREE.Vector3(),
    endTarget: new THREE.Vector3()
  });

  useEffect(() => {
    eyeStateRef.current.currentExpression = expression;
  }, [expression]);

  const transitionCamera = (targetPos, targetLookAt, duration = 1.2) => {
    if (!cameraRef.current) return;
    cameraTweenRef.current = {
      active: true,
      startTime: performance.now(),
      duration: duration * 1000,
      startPos: cameraRef.current.position.clone(),
      endPos: new THREE.Vector3(...targetPos),
      startTarget: cameraRef.current.userData.target ? cameraRef.current.userData.target.clone() : new THREE.Vector3(0, 0.75, 0),
      endTarget: new THREE.Vector3(...targetLookAt)
    };
  };

  useImperativeHandle(ref, () => ({
    setCamera: (pos, target, duration = 1.2) => transitionCamera(pos, target, duration),
    resetView: () => {
      userRotationRef.current = { x: 0.1, y: -0.3 };
      transitionCamera([0.65, 1.15, 3.2], [0, 0.75, 0], 1.2);
    }
  }));

  // Initial Scene Setup
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera (Perspective with elegant presentation FOV)
    const initialWidth = container.clientWidth || window.innerWidth;
    const initialHeight = container.clientHeight || window.innerHeight;
    const camera = new THREE.PerspectiveCamera(42, initialWidth / initialHeight, 0.1, 100);
    camera.position.set(0.65, 1.15, 3.2);
    camera.userData = { target: new THREE.Vector3(0, 0.75, 0) };
    camera.lookAt(camera.userData.target);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(initialWidth, initialHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lighting System (Pristine Studio Lighting)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Warm Key Light
    const keyLight = new THREE.DirectionalLight(0xfff5ea, 2.8);
    keyLight.position.set(3.5, 4.5, 3.8);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.bias = -0.0004;
    keyLight.shadow.normalBias = 0.02;
    scene.add(keyLight);

    // Cool Fill Light
    const fillLight = new THREE.DirectionalLight(0x94b8e8, 1.3);
    fillLight.position.set(-3.5, 2.5, 2.2);
    scene.add(fillLight);

    // Sharp Rim / Backlight (Highlights matte edges and yellow wheel hubs)
    const rimLight1 = new THREE.DirectionalLight(0xffffff, 3.0);
    rimLight1.position.set(0, 3.8, -4.5);
    scene.add(rimLight1);

    const rimLight2 = new THREE.DirectionalLight(0xfef08a, 1.4);
    rimLight2.position.set(-2.5, 0.8, -2.5);
    scene.add(rimLight2);

    // 5. Build Procedural Eye Canvas Texture
    const eyeCanvas = document.createElement('canvas');
    eyeCanvas.width = 512;
    eyeCanvas.height = 256;
    eyeCanvasRef.current = eyeCanvas;
    const eyeTexture = new THREE.CanvasTexture(eyeCanvas);
    eyeTexture.colorSpace = THREE.SRGBColorSpace;
    eyeTextureRef.current = eyeTexture;

    // 6. Build the 3D ELO Robot Model
    const eloGroup = new THREE.Group();
    eloGroupRef.current = eloGroup;
    scene.add(eloGroup);

    // --- MATERIALS ---
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x14161a,
      roughness: 0.84,
      metalness: 0.16,
    });

    const lidMat = new THREE.MeshStandardMaterial({
      color: 0x0c0e12,
      roughness: 0.72,
      metalness: 0.28,
    });

    const seamMat = new THREE.MeshStandardMaterial({
      color: 0xb87333,
      roughness: 0.4,
      metalness: 0.8,
    });

    const printGreyMat = new THREE.MeshStandardMaterial({
      color: 0x58606e,
      roughness: 0.76,
      metalness: 0.14,
    });

    const bezelMat = new THREE.MeshStandardMaterial({
      color: 0x16181e,
      roughness: 0.58,
      metalness: 0.22,
    });

    const screenMat = new THREE.MeshStandardMaterial({
      map: eyeTexture,
      emissiveMap: eyeTexture,
      emissive: 0xffffff,
      emissiveIntensity: 1.1,
      roughness: 0.18,
      metalness: 0.08,
    });

    const cameraLensMat = new THREE.MeshPhysicalMaterial({
      color: 0x030308,
      roughness: 0.05,
      metalness: 0.9,
      transmission: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05
    });

    const screwMat = new THREE.MeshStandardMaterial({
      color: 0xc4c9d4,
      roughness: 0.32,
      metalness: 0.88,
    });

    const transducerMat = new THREE.MeshStandardMaterial({
      color: 0xd8dde8,
      roughness: 0.24,
      metalness: 0.92,
    });

    const transducerMeshMat = new THREE.MeshStandardMaterial({
      color: 0x363d47,
      roughness: 0.88,
      metalness: 0.1,
    });

    const wheelYellowMat = new THREE.MeshStandardMaterial({
      color: 0xf5b700,
      roughness: 0.38,
      metalness: 0.14,
    });

    const tireRubberMat = new THREE.MeshStandardMaterial({
      color: 0x131518,
      roughness: 0.94,
      metalness: 0.06,
    });

    const switchRedMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0x551111,
      emissiveIntensity: 0.35,
      roughness: 0.35,
      metalness: 0.2,
    });

    // --- A. CHASSIS ---
    const bodyGeo = new THREE.BoxGeometry(0.96, 0.48, 1.16);
    const bodyMesh = new THREE.Mesh(bodyGeo, chassisMat);
    bodyMesh.position.set(0, 0.46, 0);
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;
    eloGroup.add(bodyMesh);

    const seamGeo = new THREE.BoxGeometry(0.97, 0.015, 1.17);
    const seamMesh = new THREE.Mesh(seamGeo, seamMat);
    seamMesh.position.set(0, 0.695, 0);
    eloGroup.add(seamMesh);

    const lidGeo = new THREE.BoxGeometry(1.02, 0.035, 1.22);
    const lidMesh = new THREE.Mesh(lidGeo, lidMat);
    lidMesh.position.set(0, 0.718, 0);
    lidMesh.castShadow = true;
    eloGroup.add(lidMesh);

    // Front Camera Aperture & Lens
    const camHousingGeo = new THREE.CylinderGeometry(0.075, 0.075, 0.03, 24);
    camHousingGeo.rotateX(Math.PI / 2);
    const camHousingMesh = new THREE.Mesh(camHousingGeo, chassisMat);
    camHousingMesh.position.set(0, 0.54, 0.582);
    eloGroup.add(camHousingMesh);

    const camLensGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.035, 24);
    camLensGeo.rotateX(Math.PI / 2);
    const camLensMesh = new THREE.Mesh(camLensGeo, cameraLensMat);
    camLensMesh.position.set(0, 0.54, 0.585);
    eloGroup.add(camLensMesh);

    const pupilGeo = new THREE.CylinderGeometry(0.018, 0.018, 0.04, 16);
    pupilGeo.rotateX(Math.PI / 2);
    const pupilMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const pupilMesh = new THREE.Mesh(pupilGeo, pupilMat);
    pupilMesh.position.set(0, 0.54, 0.59);
    eloGroup.add(pupilMesh);

    // Flanking sensor holes
    const holeGeo = new THREE.CylinderGeometry(0.014, 0.014, 0.02, 16);
    holeGeo.rotateX(Math.PI / 2);
    const leftHole = new THREE.Mesh(holeGeo, pupilMat);
    leftHole.position.set(-0.24, 0.54, 0.582);
    const rightHole = new THREE.Mesh(holeGeo, pupilMat);
    rightHole.position.set(0.24, 0.54, 0.582);
    eloGroup.add(leftHole);
    eloGroup.add(rightHole);

    // --- B. ULTRASONIC SENSORS ---
    const buildUltrasonicModule = () => {
      const group = new THREE.Group();
      const pcbGeo = new THREE.BoxGeometry(0.22, 0.09, 0.02);
      const pcbMat = new THREE.MeshStandardMaterial({ color: 0x133857, roughness: 0.65 });
      const pcbMesh = new THREE.Mesh(pcbGeo, pcbMat);
      group.add(pcbMesh);

      const cylGeo = new THREE.CylinderGeometry(0.036, 0.036, 0.045, 24);
      cylGeo.rotateX(Math.PI / 2);

      const transL = new THREE.Mesh(cylGeo, transducerMat);
      transL.position.set(-0.062, 0, 0.025);
      transL.castShadow = true;
      group.add(transL);

      const transR = new THREE.Mesh(cylGeo, transducerMat);
      transR.position.set(0.062, 0, 0.025);
      transR.castShadow = true;
      group.add(transR);

      const meshCapGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.002, 16);
      meshCapGeo.rotateX(Math.PI / 2);
      const meshL = new THREE.Mesh(meshCapGeo, transducerMeshMat);
      meshL.position.set(-0.062, 0, 0.048);
      group.add(meshL);
      const meshR = new THREE.Mesh(meshCapGeo, transducerMeshMat);
      meshR.position.set(0.062, 0, 0.048);
      group.add(meshR);

      return group;
    };

    const frontSonar = buildUltrasonicModule();
    frontSonar.position.set(0, 0.35, 0.582);
    eloGroup.add(frontSonar);

    const sideSonar = buildUltrasonicModule();
    sideSonar.rotation.y = -Math.PI / 2;
    sideSonar.position.set(-0.482, 0.35, 0.12);
    eloGroup.add(sideSonar);

    // --- C. RED POWER SWITCH ---
    const switchBezelGeo = new THREE.BoxGeometry(0.03, 0.08, 0.13);
    const switchBezel = new THREE.Mesh(switchBezelGeo, chassisMat);
    switchBezel.position.set(-0.485, 0.35, -0.15);
    eloGroup.add(switchBezel);

    const switchRockerGeo = new THREE.BoxGeometry(0.025, 0.05, 0.08);
    const switchRocker = new THREE.Mesh(switchRockerGeo, switchRedMat);
    switchRocker.position.set(-0.495, 0.35, -0.15);
    switchRocker.rotation.y = 0.2;
    eloGroup.add(switchRocker);

    // --- D. UPPER MOUNTING STRUCTURE (NECK) ---
    const headGroup = new THREE.Group();
    headGroupRef.current = headGroup;
    headGroup.position.set(0, 0.73, 0.02);
    eloGroup.add(headGroup);

    const neckBaseGeo = new THREE.BoxGeometry(0.24, 0.02, 0.22);
    const neckBaseMesh = new THREE.Mesh(neckBaseGeo, printGreyMat);
    neckBaseMesh.position.set(0, 0.01, 0);
    headGroup.add(neckBaseMesh);

    const neckColumnGeo = new THREE.BoxGeometry(0.16, 0.28, 0.16);
    const neckColumnMesh = new THREE.Mesh(neckColumnGeo, printGreyMat);
    neckColumnMesh.position.set(0, 0.15, 0);
    neckColumnMesh.castShadow = true;
    headGroup.add(neckColumnMesh);

    const pinGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.18, 16);
    pinGeo.rotateZ(Math.PI / 2);
    const pin1 = new THREE.Mesh(pinGeo, screwMat);
    pin1.position.set(0, 0.21, 0.05);
    const pin2 = new THREE.Mesh(pinGeo, screwMat);
    pin2.position.set(0, 0.09, 0.05);
    headGroup.add(pin1);
    headGroup.add(pin2);

    const pivotGeo = new THREE.CylinderGeometry(0.11, 0.11, 0.19, 24);
    pivotGeo.rotateZ(Math.PI / 2);
    const pivotMesh = new THREE.Mesh(pivotGeo, printGreyMat);
    pivotMesh.position.set(0, 0.30, 0);
    headGroup.add(pivotMesh);

    // --- E. TILTED HEAD BOX ---
    const headBoxGroup = new THREE.Group();
    headBoxGroupRef.current = headBoxGroup;
    headBoxGroup.position.set(0, 0.40, 0.04);
    headBoxGroup.rotation.x = -0.26; // ~15 deg backward tilt
    headGroup.add(headBoxGroup);

    const headBoxGeo = new THREE.BoxGeometry(0.66, 0.46, 0.44);
    const headBoxMesh = new THREE.Mesh(headBoxGeo, printGreyMat);
    headBoxMesh.castShadow = true;
    headBoxGroup.add(headBoxMesh);

    const domeGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.32, 24, 1, false, 0, Math.PI);
    domeGeo.rotateZ(-Math.PI / 2);
    const domeMesh = new THREE.Mesh(domeGeo, printGreyMat);
    domeMesh.position.set(0, 0.23, -0.06);
    domeMesh.castShadow = true;
    headBoxGroup.add(domeMesh);

    const bezelGeo = new THREE.BoxGeometry(0.60, 0.40, 0.035);
    const bezelMesh = new THREE.Mesh(bezelGeo, bezelMat);
    bezelMesh.position.set(0, 0, 0.228);
    headBoxGroup.add(bezelMesh);

    const screwHeadGeo = new THREE.CylinderGeometry(0.013, 0.013, 0.012, 12);
    screwHeadGeo.rotateX(Math.PI / 2);
    const screwCoords = [
      [-0.26, 0.165, 0.246],
      [0.26, 0.165, 0.246],
      [-0.26, -0.165, 0.246],
      [0.26, -0.165, 0.246]
    ];
    screwCoords.forEach(([x, y, z]) => {
      const screw = new THREE.Mesh(screwHeadGeo, screwMat);
      screw.position.set(x, y, z);
      headBoxGroup.add(screw);
    });

    const screenGeo = new THREE.PlaneGeometry(0.48, 0.28);
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 0, 0.247);
    headBoxGroup.add(screenMesh);

    // --- F. FOUR YELLOW 5-SPOKE WHEELS ---
    const buildWheel = () => {
      const wheel = new THREE.Group();

      const tireGeo = new THREE.CylinderGeometry(0.23, 0.23, 0.10, 32);
      tireGeo.rotateZ(Math.PI / 2);
      const tireMesh = new THREE.Mesh(tireGeo, tireRubberMat);
      tireMesh.castShadow = true;
      wheel.add(tireMesh);

      const lugGeo = new THREE.BoxGeometry(0.105, 0.025, 0.05);
      for (let i = 0; i < 16; i++) {
        const lug = new THREE.Mesh(lugGeo, tireRubberMat);
        const angle = (i / 16) * Math.PI * 2;
        lug.position.set(0, Math.sin(angle) * 0.232, Math.cos(angle) * 0.232);
        lug.rotation.x = -angle;
        wheel.add(lug);
      }

      const rimBaseGeo = new THREE.CylinderGeometry(0.185, 0.185, 0.102, 32);
      rimBaseGeo.rotateZ(Math.PI / 2);
      const rimBase = new THREE.Mesh(rimBaseGeo, wheelYellowMat);
      wheel.add(rimBase);

      const spokeGeo = new THREE.BoxGeometry(0.104, 0.036, 0.35);
      for (let i = 0; i < 5; i++) {
        const spoke = new THREE.Mesh(spokeGeo, wheelYellowMat);
        spoke.rotation.x = (i * Math.PI) / 2.5;
        wheel.add(spoke);
      }

      const axleCapGeo = new THREE.CylinderGeometry(0.046, 0.046, 0.11, 16);
      axleCapGeo.rotateZ(Math.PI / 2);
      const axleCap = new THREE.Mesh(axleCapGeo, screwMat);
      wheel.add(axleCap);

      return wheel;
    };

    const wheels = [];
    const wheelPositions = [
      [-0.56, 0.23, 0.38],
      [0.56, 0.23, 0.38],
      [-0.56, 0.23, -0.38],
      [0.56, 0.23, -0.38]
    ];

    wheelPositions.forEach((pos) => {
      const w = buildWheel();
      w.position.set(...pos);
      eloGroup.add(w);
      wheels.push(w);
    });
    wheelsRef.current = wheels;

    // Contact shadow
    const shadowGeo = new THREE.PlaneGeometry(1.9, 2.2);
    shadowGeo.rotateX(-Math.PI / 2);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sCtx = shadowCanvas.getContext('2d');
    const grad = sCtx.createRadialGradient(128, 128, 20, 128, 128, 120);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.88)');
    grad.addColorStop(0.45, 'rgba(0, 0, 0, 0.45)');
    grad.addColorStop(0.85, 'rgba(0, 0, 0, 0.1)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    sCtx.fillStyle = grad;
    sCtx.fillRect(0, 0, 256, 256);
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);

    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      opacity: 0.85,
      depthWrite: false
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.position.set(0, 0.008, 0);
    scene.add(shadowMesh);

    // Mouse handlers for tactile inspection drag
    const onMouseMove = (e) => {
      const bounds = container.getBoundingClientRect();
      const isInsideStage = e.clientX >= bounds.left && e.clientX <= bounds.right &&
        e.clientY >= bounds.top && e.clientY <= bounds.bottom;
      if (isInsideStage) {
        const normX = ((e.clientX - bounds.left) / bounds.width) * 2 - 1;
        const normY = -((e.clientY - bounds.top) / bounds.height) * 2 + 1;
        mouseRef.current.targetX = Math.max(-1, Math.min(1, normX));
        mouseRef.current.targetY = Math.max(-1, Math.min(1, normY));
      } else {
        mouseRef.current.targetX = 0;
        mouseRef.current.targetY = 0;
      }

      if (isDraggingRef.current) {
        const deltaX = e.clientX - previousMousePosRef.current.x;
        const deltaY = e.clientY - previousMousePosRef.current.y;
        userRotationRef.current.y += deltaX * 0.007;
        userRotationRef.current.x = Math.max(-0.35, Math.min(0.55, userRotationRef.current.x + deltaY * 0.007));
        previousMousePosRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseDown = (e) => {
      const bounds = container.getBoundingClientRect();
      const isInsideStage = e.clientX >= bounds.left && e.clientX <= bounds.right &&
        e.clientY >= bounds.top && e.clientY <= bounds.bottom;
      if (!isInsideStage) return;
      isDraggingRef.current = true;
      previousMousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const onResize = () => {
      if (!renderer || !camera) return;
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('resize', onResize);

    // Animation Loop
    const clock = new THREE.Clock();

    const render = () => {
      animFrameRef.current = requestAnimationFrame(render);
      const elapsed = clock.getElapsedTime();

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.06;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.06;

      // Camera tween
      if (cameraTweenRef.current.active) {
        const { startTime, duration, startPos, endPos, startTarget, endTarget } = cameraTweenRef.current;
        const progress = Math.min((performance.now() - startTime) / duration, 1.0);
        const ease = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        camera.position.lerpVectors(startPos, endPos, ease);
        const currentT = new THREE.Vector3().lerpVectors(startTarget, endTarget, ease);
        camera.userData.target = currentT;
        camera.lookAt(currentT);

        if (progress >= 1.0) {
          cameraTweenRef.current.active = false;
        }
      }

      // Micro idle movements
      if (!isRobotPaused) {
        const breath = Math.sin(elapsed * 1.6) * 0.008;
        eloGroup.position.y = breath;

        if (headGroupRef.current) {
          const curiousTilt = expression === 'curious' ? 0.08 : 0;
          const thinkingTilt = expression === 'thinking' ? -0.06 : 0;
          const headSway = Math.sin(elapsed * 1.1) * 0.02 + mouseRef.current.x * 0.12 + curiousTilt;
          const headPitch = Math.sin(elapsed * 1.4) * 0.015 - mouseRef.current.y * 0.08 + thinkingTilt;
          headGroupRef.current.rotation.y = headSway;
          headGroupRef.current.rotation.z = Math.sin(elapsed * 1.2) * 0.012 + curiousTilt * 0.6;
          if (headBoxGroupRef.current) {
            headBoxGroupRef.current.rotation.x = -0.26 + headPitch;
          }
        }
      }

      eloGroup.rotation.y = userRotationRef.current.y;
      eloGroup.rotation.x = userRotationRef.current.x;

      drawEyeCanvas(elapsed);
      renderer.render(scene, camera);
    };

    render();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Eye Canvas Drawing Engine
  const drawEyeCanvas = (time) => {
    const canvas = eyeCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const eyeState = eyeStateRef.current;

    const now = Date.now();
    if (!eyeState.isBlinking && now - eyeState.lastBlinkTime > eyeState.nextBlinkInterval) {
      eyeState.isBlinking = true;
      eyeState.blinkProgress = 0;
      eyeState.lastBlinkTime = now;
      eyeState.nextBlinkInterval = 2800 + Math.random() * 2600;
    }

    if (eyeState.isBlinking) {
      eyeState.blinkProgress += 0.15;
      if (eyeState.blinkProgress >= 1.0) {
        eyeState.isBlinking = false;
        eyeState.blinkProgress = 0;
      }
    }

    if (now - eyeState.lastSaccadeTime > 2400 + Math.random() * 2200) {
      eyeState.saccadeX = (Math.random() - 0.5) * 16;
      eyeState.saccadeY = (Math.random() - 0.5) * 10;
      eyeState.lastSaccadeTime = now;
    }

    ctx.fillStyle = '#06070a';
    ctx.fillRect(0, 0, w, h);

    const gazeX = mouseRef.current.x * 22 + eyeState.saccadeX;
    const gazeY = -mouseRef.current.y * 14 + eyeState.saccadeY;

    const eyeW = 76;
    const eyeH = 106;
    const cornerR = 38;
    let yScale = 1.0;

    if (eyeState.isBlinking) {
      const blinkFactor = Math.sin(eyeState.blinkProgress * Math.PI);
      yScale = Math.max(0.05, 1.0 - blinkFactor * 0.95);
    }

    const leftCenter = { x: w * 0.33 + gazeX, y: h * 0.5 + gazeY };
    const rightCenter = { x: w * 0.67 + gazeX, y: h * 0.5 + gazeY };

    ctx.save();
    ctx.shadowColor = '#00F0FF';
    ctx.shadowBlur = 22;

    const drawEye = (cx, cy, isLeft) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(1, yScale);

      const exp = eyeState.currentExpression;

      if (exp === 'happy') {
        ctx.strokeStyle = '#00F0FF';
        ctx.lineWidth = 26;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.arc(0, 18, 44, Math.PI * 1.15, Math.PI * 1.85, false);
        ctx.stroke();

        ctx.fillStyle = 'rgba(255, 100, 160, 0.45)';
        ctx.beginPath();
        ctx.arc(isLeft ? -28 : 28, 52, 14, 0, Math.PI * 2);
        ctx.fill();
      } else if (exp === 'curious') {
        const tilt = isLeft ? 0.22 : -0.10;
        const scale = isLeft ? 1.16 : 0.92;
        ctx.rotate(tilt);
        ctx.scale(scale, scale);

        ctx.fillStyle = '#00F0FF';
        drawRoundedRect(ctx, -eyeW / 2, -eyeH / 2, eyeW, eyeH, cornerR);
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(-10, -18, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(14, 14, 5, 0, Math.PI * 2);
        ctx.fill();
      } else if (exp === 'listening') {
        const pulse = 1.0 + Math.sin(time * 6.5) * 0.08;
        ctx.scale(pulse, pulse);

        ctx.fillStyle = '#00F0FF';
        drawRoundedRect(ctx, -eyeW / 2, -eyeH / 2, eyeW, eyeH, cornerR);
        ctx.fill();

        ctx.fillStyle = '#C8F7FE';
        ctx.beginPath();
        ctx.arc(0, 0, 18, 0, Math.PI * 2);
        ctx.fill();
      } else if (exp === 'thinking') {
        ctx.translate(-4, -12);
        ctx.fillStyle = '#00F0FF';
        drawRoundedRect(ctx, -eyeW / 2, -eyeH / 2 + 10, eyeW, eyeH * 0.85, 28);
        ctx.fill();

        const sparkleOrbit = time * 3;
        const sx = Math.cos(sparkleOrbit) * 22;
        const sy = Math.sin(sparkleOrbit) * 22;
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(sx, sy - 10, 4, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = '#00F0FF';
        drawRoundedRect(ctx, -eyeW / 2, -eyeH / 2, eyeW, eyeH, cornerR);
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(-10, -18, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(14, 14, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    drawEye(leftCenter.x, leftCenter.y, true);
    drawEye(rightCenter.x, rightCenter.y, false);

    ctx.restore();

    if (eyeTextureRef.current) {
      eyeTextureRef.current.needsUpdate = true;
    }
  };

  const drawRoundedRect = (ctx, x, y, width, height, radius) => {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  };

  // Sync camera position whenever the slide changes or hotspot is clicked
  useEffect(() => {
    if (!cameraRef.current) return;

    if (selectedHotspot) {
      transitionCamera(selectedHotspot.cameraPos, selectedHotspot.cameraTarget, 1.1);
      return;
    }

    const currentSlide = SLIDES[currentSlideIndex] || SLIDES[0];

    // Smooth transition to this slide's camera waypoint
    userRotationRef.current = currentSlide.focus === 'center' ? { x: 0.1, y: -0.2 } : { x: 0.08, y: -0.55 };
    transitionCamera(currentSlide.cameraPos, currentSlide.cameraTarget, 1.25);
  }, [currentSlideIndex, selectedHotspot]);

  return (
    <div
      ref={containerRef}
      className="webgl-canvas-container interactive cursor-grab active:cursor-grabbing"
      aria-label="3D Model of ELO Companion Robot"
    />
  );
});
