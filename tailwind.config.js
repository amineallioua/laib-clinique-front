// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      
      colors: {
        scrollbar: '#00B2FF',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #91E3FD 0%,  #DFF7FF 100%)',
        'custom-gradient1': 'linear-gradient(to left, #EAEAFF 0%, #D3D2FF 100%)',
        'custom-gradient2': 'linear-gradient(to left, #7AD4F4 0%, #4BA3C3 100%)', // fixed spelling
      },
      screens: {
        'xs': '600px',
      },
    },
  },
  plugins: [
  ],
}
