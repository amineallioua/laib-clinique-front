// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #625B92 0%, #7169A7 54%, #988DDE 100%)',
        'custom-gradient1':'linear-gradiant(to right #7AD4F4 0% , #4BA3C3 100%)',
      },
    },
  },
  plugins: [],
}
