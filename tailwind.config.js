/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
   },
  plugins: [],
}
