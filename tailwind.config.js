/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      fontFamily: { 
        sans: ['Roboto', 'sans-serif']
    },
    keyframes: {
      typing: {
        "0%":{
          width: '0%',
          visibility: 'hidden'
        },
        '100%': {
          width: '100%'
        }
      },
      blink: {
        '50%': {
          borderColor: 'transparent'
        },
        '100%': {
          borderColor: 'white'
        }
      }
    },
    animation: {
      typing: 'typing 2s steps(20) infinite alternate, blink .7s infinite'
    }
    },
  },
  plugins: [],
}

