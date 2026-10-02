/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
          electric: '#5b54ff',
          glow: '#818cf8',
        },
        surface: {
          darkest: '#05070e',
          dark: '#0a0e1a',
          card: '#0f1526',
          cardHover: '#141b31',
          border: 'rgba(255, 255, 255, 0.08)',
          borderLight: 'rgba(15, 23, 42, 0.08)',
        },
        accent: {
          cyan: '#06b6d4',
          emerald: '#10b981',
          violet: '#8b5cf6',
          amber: '#f59e0b',
        }
      },
      boxShadow: {
        'glow-sm': '0 0 20px -3px rgba(99, 102, 241, 0.25)',
        'glow-md': '0 0 35px -5px rgba(99, 102, 241, 0.35)',
        'glow-lg': '0 0 50px -10px rgba(99, 102, 241, 0.45)',
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.3)',
        'glass-light': '0 8px 32px 0 rgba(31, 38, 135, 0.06)',
        'glass-dark': '0 12px 40px 0 rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'spin-slow': 'spin 14s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.65', transform: 'scale(1.04)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    }
  },
  plugins: []
}
