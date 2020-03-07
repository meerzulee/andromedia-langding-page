 const {screens,inset} = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      'only-xs': {
        'min': '320px',
        'max':'420px'
      },
      'only-sm': {
        'min': '640px',
        'max':'768px'
      },
      'phone': {
        'min': '320px',
        'max':'640px'
      },
      xs: '320px',
      ...screens,
    },
    fontFamily: {
      body: ['Suisse', ]
    },

    backgroundColor: theme => ({
      ...theme('colors'),
      'paris_daisy': '#ffff3c',
      'radical_red': '#FC4C5D'

    }),
    zIndex: {
      '-10': '-10',
      '-11': '-11',
    },
    inset: {
      '2': '2rem',
      ...inset
      }
  },
  variants: {},
  plugins: []
}