/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
      reveal: {
        '0%': { transform: 'translate(0,100%)', opacity: 0 },
        '100%': { transform: 'translate(0,0)', opacity: 1 },
      },
    },
    animation: {
      reveal: 'reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s forwards',
    },
  },
  plugins: [
    require('daisyui'),
  ],
  darkMode: 'class',
}

