/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'game':'gamelove, monospace'
      },
      animation: {
        'spinlow':'spin infinite 5s linear',
        'pinglow':'pinglow 2s cubic-bezier(0, 0.2, 0, 1) infinite;'
      },
      
    },
  },
  plugins: [],
}