/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('./public/meadow-with-grass-pond-morning_107791-10142.jpg')",
        
        'hero-night': "url('./public/mountains-cleft-view-from-bottom-night-scenery-landscape-with-high-rocks-full-moon-with-stars-glowing-peaks_107791-5585.jpg')",
      }
    },
  },
  plugins: [],
}
