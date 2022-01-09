const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/index.html',
    './app/templates/**/*.hbs',
    './app/components/**/*.hbs',
  ],
  theme: {
    extend: {
      fontFamily: {
        script: ['feltro-eroded', 'sans-serif'],
        ...defaultTheme.fontFamily,
      },
    },
  },
  plugins: [],
}
