const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'dark': '#020412',
      'maroon': '#510513',
      'red': '#6A040F',
      'oxford-blue': '#061A40',
      'columbia-blue': '#B9D6F2',
      'sapphire': '#0353A4',
      'bice-blue': '#006DAA',
      'prussian-blue': '#003559',
      'gray-white': '#F7FFF7'
    },
  },
  plugins: [
    flowbite.content(),
  ],
}