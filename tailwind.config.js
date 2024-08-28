/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        button: {
          one: '#f87171',
          two: '#fcd34d',
          three: '#86efac',
          text: '#f9fafb',
        },
      },
    },
  },
  plugins: [],
};
