/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inconsolata: ['Inconsolata','monospace'],
      rubik: ['Rubik', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
      uncial: ['Uncial Antiqua', 'cursive'],
      joseline: ['Josefin Sans', 'sans-serif'],
      Raggae: ['Reggae One', 'cursive'],
      Wallpoet: ['Wallpoet', 'cursive'],
    },      
    extend: {      
    },
    
  },
  plugins: [    
  ],
  darkMode: "class",
}