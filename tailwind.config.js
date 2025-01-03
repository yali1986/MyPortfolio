module.exports = {
  content: ["./*.{html,js,css}"],
  theme: {
    extend: {
      colors: {
        primary: '#FDC435',
        secundary: '#333333',             
      },
            fontFamily: {
        lora: ['Lora', 'serif'],
      },
      screens: {
        'xs': '320px',
        'custom-md': { min: '860px', max: '1023px' },
      },
    },
  },
  plugins: [],
};
