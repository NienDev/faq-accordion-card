/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './*.js'],
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        // Primary
        // Text
        veryDarkDesaturatedBlue: 'hsl(238, 29%, 16%)',
        softRed: 'hsl(14, 88%, 65%)',
        // Background Gradient
        softViolet: 'hsl(273, 75%, 66%)',
        softBlue: 'hsl(240, 73%, 65%)', 

        // neutral
        // text
        veryDarkGrayishBlue: 'hsl(237, 12%, 33%)',
        darkGrayishBlue: 'hsl(240, 6%, 50%)',
        // divider
        lightGrayishBlue: 'hsl(240, 5%, 91%)'
      }
    },
  },
  plugins: [],
}
