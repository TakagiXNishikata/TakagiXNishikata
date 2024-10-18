/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollBehavior: {
        smooth: 'smooth',
      },
      colors: {
        'deep-blue' : '#001146',
        'aquamarine':'#7FFFD4',
        'earth-green':'#0C1915',
        'bone-white':'#E2E8F0',
        'shadow-gray' : '#878B90',
      },
      fontFamily:{
        Alata: ['Alata-Regular', 'sans-serif'],
        Inter: ['Inter-Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

