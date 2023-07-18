/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ['./src/**/*.{html,scss,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue': '#0090F8',
      'seasalt': '#F6F6F6',
      'gray': '#7A7878',
      'black': '#1E293B',
      'green': '#66BB6A',
      'white': '#ffff',
      'gary-100':'#D2D2D2'
    },
    fontSize: {
      'xs'  : '0.625rem',
      'sm'  : '0.75rem',
      'md'  : '0.8125rem',
      'base': '0.875rem',
      'lg'  : '1rem',
      'xl'  : '1.125rem',
      '2xl' : '1.25rem',
      '3xl' : '1.5rem',
      '4xl' : '2rem',
      '5xl' : '2.25rem',
      '6xl' : '2.5rem',
      '7xl' : '3rem',
      '8xl' : '4rem',
      '9xl' : '6rem',
      '10xl': '8rem'
    },
    screens : {
        print: {'raw': 'print'},
        sm   : '600px',
        md   : '960px',
        lg   : '1280px',
        xl   : '1440px'
    },
    extend: {},
  },
  plugins: [],
}

