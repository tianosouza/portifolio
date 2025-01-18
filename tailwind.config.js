/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        'color-primary': {
          DEFAULT: '#001C55',
          light: '#001C55',
          dark: '#00072D',
        },
        'color-secondary': {
          DEFAULT: '#0A2472',
          light: '#0E6BA8',
          dark: '#0A2472',
        },
        'color-text': {
          DEFAULT: '#A6E1FA',
          light: '#A6E1FA',
          dark: '#0E6BA8',
        },
      }
    },
  },
  plugins: [],
}

