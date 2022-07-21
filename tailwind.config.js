/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
    },
    extend: {
      fontFamily:{
        barlow:['Barlow']
      },
      colors:{
        orange:'#F16718',
        orangeLight:'#FF9B62',
        dark:'#162542',
        silver:'#7B8BAD',
        light:'#E8EFF2',
      }
    },
  },
  plugins: [],
}
