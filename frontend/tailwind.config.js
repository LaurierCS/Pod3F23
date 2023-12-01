/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      "light",
      "dark",
    ],

  },
  plugins: [require('daisyui')],
}

