/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '10': '2.5rem', // Equivalent to 40px
    },
    },
  },
  plugins: [],
}

// /* If using a CSS file */
// .fixed {
//   position: fixed;
// }
// .bottom-10 {
//   bottom: 2.5rem; /* Adjust as needed */
// }
// .right-10 {
//   right: 2.5rem; /* Adjust as needed */
// }
