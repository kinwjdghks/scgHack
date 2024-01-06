/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        "fridgeOrange":"ED653F",
      },
      backgroundColor: {
        

      },
      
    
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}

