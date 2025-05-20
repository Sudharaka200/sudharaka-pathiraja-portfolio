/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'desktop-Img' : "url('/src/images/Group 1000006192.png')",
        'mobile_img' : "url('/src/images/489538167_1336748970774068_8530152704306177181_n 1.png')",
      }
    },
  },
  plugins: [],
}



