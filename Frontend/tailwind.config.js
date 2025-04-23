/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#1E3A8A', // blue-800
        secondary: '#FBBF24', // yellow-400
        accent: '#F472B6', // pink-400
        neutral: '#374151', // gray-700
        'base-100': '#FFFFFF', // white
        info: '#3ABFF8', // blue-500
        success: '#36D399', // green-500
        warning: '#FBBD23', // yellow-500
        error: '#F87272', // red-500
        background: '#4342429d' // partially transparent black
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}