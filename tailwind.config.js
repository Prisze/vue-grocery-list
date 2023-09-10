/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Rubik Iso', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: '#b3c2ff',
        foreground: '#15257a',
        comment: '#ffafaf',
        accent: '#54ffbd',
        redish: '#ff5370',
        orangish: '#f78c6c',
        yellowish: '#eff5be',
        greenish: '#c3e88d',
        bluish: '#82aaff',
        purplish: '#c792ea',
        
      }
    },
  },
  plugins: [],
}

