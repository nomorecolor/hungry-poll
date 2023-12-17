/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        'dropdown-enter': {
          "0%": { transform: 'scale(.95)', opacity: 0 },
          "100%": { transform: 'scale(1)', opacity: 1 },
        },
        'dropdown-leave': {
          "0%": { transform: 'scale(1)', opacity: 1 },
          "100%": { transform: 'scale(.95)', opacity: 0 },
        },
      }, animation: {
        'dropdown-enter': 'dropdown-enter .1s ease-out',
        'dropdown-leave': 'dropdown-leave .075s ease-out',
      }
    },
  },
  plugins: [],
}

