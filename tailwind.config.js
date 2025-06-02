/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'rgba(255, 89, 89, 0.1)',
          200: 'rgba(255, 89, 89, 0.2)',
          300: 'rgba(255, 89, 89, 0.3)',
          400: '#ff7a7a',
          500: '#ff5959', // Bittersweet
          600: '#e54545',
          700: '#cc4747',
          800: '#b23c3c',
          900: '#8a2e2e',
        },
        secondary: {
          100: 'rgba(60, 187, 177, 0.1)',
          200: 'rgba(60, 187, 177, 0.2)',
          300: 'rgba(60, 187, 177, 0.3)',
          400: '#5fd9cf',
          500: '#3cbbb1', // Verdigris
          600: '#35a59c',
          700: '#2e9087',
          800: '#277a73',
          900: '#1f5f5a',
        },
        neutral: {
          50: '#f8fafa',
          100: '#f0f2f2',
          200: '#e8eceb',
          300: '#d6dada',
          400: '#c4cbca', // Silver
          500: '#9fa8a7',
          600: '#758280',
          700: '#5a6462',
          800: '#3c4543',
          900: '#0a0f0d', // Night
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 2px 10px rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};