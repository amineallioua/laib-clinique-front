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
        'custom-gradient1': 'linear-gradient(to left, #EAEAFF 0%, #D3D2FF 100%)', // fixed spelling
      },
    },
  },
  plugins: [],
}
