/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        elo: {
          bg: '#0A0B0E',
          card: '#121419',
          cardHover: '#171A21',
          border: '#232732',
          borderLight: '#323746',
          yellow: '#F5B700',
          yellowHover: '#FFC72C',
          yellowMuted: '#997300',
          steel: '#4E5565',
          steelLight: '#8B94A7',
          steelDark: '#20242D',
          cream: '#F6F3EC',
          creamMuted: '#C5C1B6',
          cyan: '#00F0FF',
          cyanGlow: '#00D4FF',
          red: '#EF4444',
          accent: '#FF7A00'
        }
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-yellow': '0 0 30px -5px rgba(245, 183, 0, 0.3)',
        'glow-cyan': '0 0 35px -5px rgba(0, 240, 255, 0.4)',
        'glow-white': '0 0 40px -10px rgba(255, 255, 255, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
