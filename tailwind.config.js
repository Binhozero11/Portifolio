/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'celulares-menores': '381px',
      'sm':	'640px',
      'md':	'768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      boxShadow: {
        'small': '2px 1px 5px 1px',
        'small-active': '-2px 2px 5px 1px',
        'default': '4px 4px 8px 0',
        'box': '4px 4px 8px 0px #eef2ff',
      },
    },
  },
  plugins: [],
}