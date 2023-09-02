/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'pale-grey': '#f5f6fa',
        'bs-azure': '#0290ff',
        'bs-sec': '#4386bf',
      },
    },
  },
  plugins: [],
};
