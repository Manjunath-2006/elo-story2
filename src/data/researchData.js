/**
 * ELO — VERIFIED RESEARCH & PRODUCT DATA
 * All statistics verified against primary sources with precise contextual disclaimers.
 */

export const PRODUCT_INFO = {
  name: "ELO",
  fullName: "ELO — The Child Companion Robot",
  tagline: "A little companion. A world of curiosity.",
  supportingText: "Meet ELO — a voice-first companion designed to bring conversation, curiosity and connection into children's everyday lives.",
  targetAge: "Children aged 4–8 years",
  category: "Voice-First Child Companion Robot",
  coreProposition: "What if technology could create connection without demanding another screen?",
  closingStatement: "The future of childhood technology should feel more human.",
  closingSubtext: "ELO — A companion for curious minds.",
  disclaimer: "ELO is a complementary home companion, not a replacement for parents, caregivers, daycare centres or responsible adult supervision.",
};

export const HOTSPOTS_DATA = [
  {
    id: "display",
    title: "Expressive Eye Display",
    subtitle: "Emotional engagement without screen addiction",
    description: "A compact inset display communicating exclusively through expressive eye emojis (happy, curious, listening, thinking). It provides social presence and feedback without video streams, games or touch interfaces.",
    coords: [0, 1.42, 0.46],
    cameraPos: [0, 1.45, 1.55],
    cameraTarget: [0, 1.35, 0.4]
  },
  {
    id: "camera",
    title: "Optical Following Camera",
    subtitle: "Child observation & spatial awareness",
    description: "Front-facing optical sensor that identifies and follows the specific child selected by the parent via the mobile application, and powers parent-requested live camera streaming.",
    coords: [0, 1.62, 0.42],
    cameraPos: [0, 1.65, 1.45],
    cameraTarget: [0, 1.55, 0.35]
  },
  {
    id: "mic-speaker",
    title: "Microphone & Verbal Speaker",
    subtitle: "Natural spoken voice interaction",
    description: "Integrated microphone captures children's natural spoken queries, and the speaker returns simple, age-appropriate answers in real time, filtered through safety guardrails.",
    coords: [0.42, 1.35, 0.1],
    cameraPos: [1.2, 1.4, 0.85],
    cameraTarget: [0.3, 1.3, 0.1]
  },
  {
    id: "sensors",
    title: "Ultrasonic Obstacle Avoidance",
    subtitle: "Twin-transducer spatial navigation",
    description: "Front and lateral dual-cylinder ultrasonic transducers provide real-time distance telemetry to navigate gently around toys, furniture, and curious little feet.",
    coords: [0, 0.4, 0.72],
    cameraPos: [0, 0.5, 1.85],
    cameraTarget: [0, 0.38, 0.6]
  },
  {
    id: "wheels",
    title: "Wheeled Mobile Robotic Platform",
    subtitle: "Sturdy indoor mobility with 4 yellow hubs",
    description: "Four drive wheels with high-grip rubber tires and signature yellow hubs engineered for stable, low-speed indoor companionship alongside the child.",
    coords: [-0.62, 0.22, 0.45],
    cameraPos: [-1.55, 0.42, 1.25],
    cameraTarget: [-0.35, 0.25, 0.3]
  },
  {
    id: "switch",
    title: "Physical Power Isolation Switch",
    subtitle: "Tactile parental hardware shutoff",
    description: "A high-visibility red rocker switch for instant physical hardware power-off, complementing the remote digital stop/pause control in the parent app.",
    coords: [0.52, 0.55, -0.3],
    cameraPos: [1.35, 0.75, -0.4],
    cameraTarget: [0.4, 0.55, -0.2]
  }
];

export const RESEARCH_PILLARS = [
  {
    id: "workforce",
    badge: "RESEARCH PILLAR 01 // LABOUR FORCE DYNAMICS",
    headline: "The Balancing Act of Modern Working Families",
    lead: "Millions of parents balance full-time careers with their young children's vital need for attention, conversation, and developmental engagement.",
    stats: [
      {
        value: "40.0%",
        label: "Female Labour-Force Participation Rate (FLFPR)",
        subtext: "Among Indian women aged 15 years and above (PLFS 2025).",
        highlight: true
      },
      {
        value: "~20 Crore",
        label: "Employed Women Nationwide",
        subtext: "Estimated number of employed women aged 15+ in India during 2025.",
        highlight: false
      },
      {
        value: "44.4%",
        label: "Childcare & Homemaking Barrier",
        subtext: "Share of women outside the labour force citing childcare/personal homemaking commitments as primary reason for not participating.",
        highlight: false
      }
    ],
    distinction: "Important Distinction: Female labour-force participation (40.0%) reflects all women aged 15+ in the workforce, distinct from the specific subset of working mothers.",
    source: "Government of India, Ministry of Statistics & Programme Implementation (MoSPI), PLFS Annual Report 2025.",
    urls: [
      "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2246009&lang=1&reg=3",
      "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2323706&lang=1&reg=3"
    ]
  },
  {
    id: "unpaid-care",
    badge: "RESEARCH PILLAR 02 // TIME USE REALITY",
    headline: "The Disparity in Daily Domestic & Caregiving Responsibilities",
    lead: "India's Time Use Survey reveals a staggering daily time gap spent on unpaid care and home management, directly impacting time available for child engagement.",
    comparison: {
      womenMinutes: 341,
      menMinutes: 42,
      womenLabel: "Women (Aged 15–59)",
      menLabel: "Men (Aged 15–59)",
      ratioText: "8.1x Disparity",
      description: "Average minutes spent per day on unpaid domestic and caregiving work."
    },
    source: "India Time Use Survey 2024, presented in UNDP India's 2025 research synthesis ('A Synthesis of Evidence', UNDP).",
    url: "https://www.undp.org/sites/g/files/zskgke326/files/2025-07/web_spread_17_july-a_synthesis_of_evidence_undp.pdf"
  },
  {
    id: "screen-exposure",
    badge: "RESEARCH PILLAR 03 // EARLY SCREEN CONSUMPTION",
    headline: "When the Screen Becomes the Default Afternoon Companion",
    lead: "With parents engaged in work and household duties, glowing displays frequently fill the quiet hours. A 2025 peer-reviewed study documents reported screen exposure in young children.",
    distribution: [
      {
        percentage: "63.2%",
        range: "2–4 Hours / Day",
        period: "Weekdays",
        note: "Nearly two-thirds of young children exposed to heavy weekday screen time."
      },
      {
        percentage: "12.7%",
        range: "> 8 Hours / Day",
        period: "Weekdays",
        note: "Extreme passive consumption exceeding full adult working hours."
      },
      {
        percentage: "68.9%",
        range: "2–4 Hours / Day",
        period: "Weekends",
        note: "Screen reliance continues across weekend domestic routines."
      }
    ],
    sample: "Research Sample: 3,624 parents of children aged 2–5 years surveyed across five northern Indian states.",
    contextNote: "Contextual Notice: This is a parent-reported study published in BMJ Paediatrics Open, not a nationally representative estimate for all Indian children.",
    source: "Peer-reviewed study published in BMJ Paediatrics Open, 2025.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12198805/"
  },
  {
    id: "child-development",
    badge: "RESEARCH PILLAR 04 // EVIDENCE-BASED DEVELOPMENT",
    headline: "The Quality & Context of Technology Interaction Matter",
    lead: "Evidence indicates that the way young minds interact with technology fundamentally shapes developmental outcomes. Active, responsive engagement differs from passive solitary consumption.",
    metaAnalysis: {
      studies: "100 Studies",
      participants: "176,742 Participants",
      metaStudies: "64 Observational Studies included in meta-analyses",
      findingsPoorer: "Programme viewing and background television were associated with poorer cognitive outcomes. Age-inappropriate content and caregiver screen use during routines were associated with poorer psychosocial outcomes.",
      findingsPositive: "Co-use of screens with caregivers was positively associated with cognitive outcomes, illustrating that reciprocal social interaction and shared conversation provide developmental value."
    },
    scientificNote: "Scientific Accuracy: These represent observational associations from epidemiological research, not experimentally proven causation.",
    source: "Systematic review and meta-analysis published in JAMA Pediatrics, 2024.",
    url: "https://jamanetwork.com/journals/jamapediatrics/fullarticle/2821940"
  },
  {
    id: "who-guidelines",
    badge: "RESEARCH PILLAR 05 // GLOBAL HEALTH BENCHMARK",
    headline: "World Health Organization Screen-Time Guidance",
    lead: "International pediatric health bodies emphasize active movement and dialogue over sedentary screen exposure.",
    benchmark: "WHO recommends no more than 1 hour of sedentary screen time daily for children aged 3–4 years, with less being better.",
    guidelineNote: "Critical Scope Note: The WHO 1-hour sedentary guideline specifically applies to children under 5 years of age. It must not be extrapolated as a blanket limit to the entire 4–8 year age bracket of ELO.",
    source: "World Health Organization (WHO) Guidelines on physical activity, sedentary behaviour and sleep for children under 5 years of age, 2019.",
    url: "https://www.who.int/news/item/24-04-2019-To-grow-up-healthy-children-need-to-sit-less-and-play-more"
  },
  {
    id: "childcare-gap",
    badge: "RESEARCH PILLAR 06 // INSTITUTIONAL CHILDCARE ACCESSIBILITY",
    headline: "Childcare Accessibility & The Urban Infrastructure Deficit",
    lead: "Daycares and preschools provide structured care, yet widespread availability, geographic proximity, and operating hours present structural barriers for working families.",
    dataPoints: [
      {
        metric: "6–7 Million",
        label: "Urban Women Needing Childcare",
        description: "Estimated number of women from low-income urban households in India in need of quality, affordable childcare."
      },
      {
        metric: "< 10%",
        label: "Demand Currently Met",
        description: "Existing public and private childcare provision meets less than one-tenth of this estimated urban need."
      }
    ],
    clarification: "Analytical Disclaimer: These figures represent modelled estimates from the UNDP & Dalberg research framework, not an official national census count of working parents.",
    source: "UNDP & Dalberg Report: 'Expanding Access to Childcare in Urban India: A Blended Finance Approach', March 2026.",
    url: "https://www.undp.org/india/publications/expanding-access-childcare-urban-india-blended-finance-approach"
  },
  {
    id: "local-cost",
    badge: "RESEARCH PILLAR 07 // LOCAL FINANCIAL PERSPECTIVE",
    headline: "Childcare Cost Structures: Coimbatore Listing Examples",
    lead: "For families seeking institutional daycare or early schooling, monthly and annual commitments represent significant household budget allocations.",
    examples: [
      {
        center: "Helen O'Grady",
        locality: "Sai Baba Colony, Coimbatore",
        daycareFee: "₹6,000 – ₹9,000 / month",
        preschoolFee: "₹40,000 – ₹70,000 / year",
        sourceRef: "Kiddenz Local Directory Listing"
      },
      {
        center: "KLAY Preschool & DayCare",
        locality: "R.S. Puram, Coimbatore",
        daycareFee: "₹15,000 – ₹25,000 / month",
        preschoolFee: "₹1,50,000 – ₹2,00,000 / year",
        sourceRef: "Kiddenz Local Directory Listing"
      }
    ],
    caveat: "Accuracy Note: Listed figures represent indicative directory examples for specific centers, not official quotes or city-wide average childcare expenses.",
    urls: [
      "https://kiddenz.com/coimbatore/rs-puram",
      "https://kiddenz.com/coimbatore/rs-puram/klay-rs-puram-5584646"
    ]
  }
];

export const CONVERSATION_EXAMPLES = [
  {
    id: "curiosity",
    type: "curiosity",
    childQuery: "Why is the sky blue, Elo?",
    eloExpression: "curious",
    nextExpression: "happy",
    eloResponse: "Because sunlight is made of all the rainbow colors! When it enters our air, the blue rays scatter all across the sky like tiny dancing sparkles! Isn't that wonderful?",
    filterTriggered: false,
    filterStatus: "Natural Spoken Dialogue // Safe Curated Science",
    pedagogicalValue: "Fosters early scientific inquiry through verbal acoustic response without requiring a phone or tablet screen."
  },
  {
    id: "safety-redirect",
    type: "safety",
    childQuery: "Can I touch the blue flame on the stove?",
    eloExpression: "listening",
    nextExpression: "curious",
    eloResponse: "Ooh, the stove is very hot and only for grown-ups to cook yummy food! Let's step away and ask Mummy or Papa together. How about we guess how birds make their nests instead?",
    filterTriggered: true,
    filterStatus: "Child Safety Guardrail Engaged // Proactive Gentle Redirection",
    pedagogicalValue: "Actively protects young children by redirecting hazardous questions toward trusted adults and safe playful topics."
  },
  {
    id: "ocean-depth",
    type: "curiosity",
    childQuery: "Do fish ever go to sleep underwater?",
    eloExpression: "listening",
    nextExpression: "happy",
    eloResponse: "Yes, they do! But most fish don't have eyelids, so they keep their eyes open while resting quietly near coral reefs or floating gently in the water!",
    filterTriggered: false,
    filterStatus: "Natural Spoken Dialogue // Safe Curated Science",
    pedagogicalValue: "Encourages wonder about biology and natural habitats through conversational imagination."
  }
];

export const PARENT_APP_DATA = {
  activeChild: "Aarav",
  childAge: "Age 5",
  childrenList: [
    { id: "c1", name: "Aarav", age: "Age 5", status: "Following Active", battery: "92%" },
    { id: "c2", name: "Ananya", age: "Age 7", status: "In Range", battery: "92%" }
  ],
  liveStatus: "Active Follow Mode",
  safetyMode: "High Guardrails (Ages 4–8)",
  cameraDisclaimer: "Notice: Simulated camera stream for prototype demonstration."
};
