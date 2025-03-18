/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        beige: {
          50: '#f5f2ef',
          100: '#e6e0db',
          200: '#d7cec7',
          300: '#c8bbb3',
          400: '#b9a99f',
          500: '#aa968b',
          600: '#9b8377',
          700: '#8c7163',
          800: '#7d5e4f',
          900: '#6e4c3b',
        },
      },
    },
  },
  plugins: [],
};