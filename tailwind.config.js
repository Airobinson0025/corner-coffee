/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
        poiret: ['Poiret One', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        petit: ['Petit Formal Script', 'cursive'],
        lora: ['Lora', 'serif'],
      }
    },
  },
  plugins: [],
}

