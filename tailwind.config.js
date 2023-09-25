/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {      
      fontFamily:{
      poppinsFont:['Poppins', 'sans-serif']
    },
    boxShadow:{
      shadow1:"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
    }},
  },
  plugins: [],
}

