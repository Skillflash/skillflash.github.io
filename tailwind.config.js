// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'source-sans-pro': ['"Source Sans Pro"'],
        'quicksand': ['"Quicksand"'],
        'atkinson':['"Atkinson Hyperlegible"']
      },
      height: {
        '132': '50rem',
        '120': '30rem',
      },
      width: {
        '76': '19rem',
      },
      colors: {
        'primary-fade': {
          light: '#ff4d9a',
          DEFAULT: '#FF006E',
          dark: '#b3004d',
        },
        'primary-blue': {
          light: '#77a9fc',
          DEFAULT: '#3A86FF',
          dark: '#2a5caf',
        },
        'primary-lila': {
          light: '#a874f2',
          DEFAULT: '#8338EC',
          dark: '#5c27a5',
        },
        'primary-orange': {
          light: '#fb8c79',
          DEFAULT: '#FB5607',
          dark: '#ae3f2c',
        },
        'secondary-pink': {
          light: '#fa8399',
          DEFAULT: '#FF006E',
          dark: '#ae374c',
        },
        'secondary-yellow': {
          light: '#ffd377',
          DEFAULT: '#FFC03D',
          dark: '#b3862b',
        },
        'secondary-rosa': {
          light: '#ffd377',
          DEFAULT: '#FF00EE',
          dark: '#b3862b',
        },
        'neutral-white': {
          light: '#ffffff',
          DEFAULT: '#FFFFFF',
          dark: '#b3b3b3',
        },
        'neutral-grey': {
          light: '#cdcdcd',
          DEFAULT: '#B7B7B7',
          dark: '#808080',
        },
        'neutral-black': {
          light: '#645d74',
          DEFAULT: '#211838',
          dark: '#171127',
        },
        'alert-error': {
          light: '#f67e88',
          DEFAULT: '#F24655',
          dark: '#a9313b',
        },
        'alert-success': {
          light: '#7ee3c9',
          DEFAULT: '#47D7B2',
          dark: '#32977d',
        },
      },
      backgroundImage: theme => ({
        'event-image': "url('/src/resources/Images/project.png')"
       })
    }
  },
  plugins: []
};
