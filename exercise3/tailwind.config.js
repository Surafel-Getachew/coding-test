/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        grey: 'bg-slate-200',
      },
      screens: {
        xsm: { max: '400px' },
      },
    },
  },
  plugins: [],
};
