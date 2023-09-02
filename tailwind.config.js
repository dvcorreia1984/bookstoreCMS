/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bs-main-bg': '#f5f6fa',
        'bs-pale-grey': '#fafafa',
        'bs-azure': '#0290ff',
        'bs-sec': '#4386bf',
      },
    },
  },
  plugins: [],
};
