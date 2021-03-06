
  module.exports = {
    theme: {
      colors: {
        transparent: 'transparent',
        white: {
          default: '#fff',
          200: '#F0F3F4',
          300: '#E0E1E2',
          400: '#ECEFF0',
          500: '#C8D1D3',
        },
        black: {
          default: '#1B1C20',
        },
        blue: {
          100: '#6E8CA0',
          200: '#324755',
          300: '#334856',
        },
        green: {
          100: '#87BCBF',
        },
        orange: {
          100: '#D97D54',
          200: '#D95454',
        },
        brown: {
          100: '#B9B0A2',
        },
      },
      fontFamily: {
        'sans': [
          'Roberto',
          'sans-serif',
        ],
      },
      fontSize: {
        '8': '.5rem',
        '9': '.563rem',
        '10': '.625rem',
        '11': '.6875rem',
        '12': '.75rem',
        '13': '.8125rem',
        '14': '.875rem',
        '15': '.9375rem',
        'base': '1rem',     // 16px
        '17': '1.0625rem',
        '18': '1.125rem',
        '19': '1.1875rem',
        '20': '1.25rem',
        '21': '1.3125rem',
        '22': '1.375rem',
        '23': '1.438rem',
        '24': '1.5rem',
        '26': '1.625rem',
        '27': '1.688rem',
        '28': '1.75rem',
        '30': '1.875rem',
        '32': '2rem',
        '34': '2.125rem',
        '36': '2.25rem',
        '38': '2.375rem',
        '40': '2.5rem',
        '44': '2.75rem',
        '47': '2.938rem',
        '48': '3rem',
        '50': '3.125rem',
        '51': '3.1875rem',
        '54': '3.375rem',
        '55': '3.4375rem',
        '59': '3.6875rem',
        '60': '3.75rem',
        '65': '4.063rem',
      },
      lineHeight: theme => theme('fontSize'),
      spacing: {
        px: '1px',
        '0': '0',
        '3': '3px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '10': '10px',
        '13': '13px',
        '14': '14px',
        '15': '15px',
        '20': '20px',
        '25': '25px',
        '30': '30px',
        '35': '35px',
        '37': '37px',
        '40': '40px',
        '45': '45px',
        '50': '50px',
        '60': '60px',
        '70': '70px',
        '77': '77px',
        '80': '80px',
        '96': '96px',
        '100': '100px',
        '110': '110px',
        '120': '120px',
        '150': '150px',
        '173': '173px',
        '183': '183px',
        '225': '225px',
        '250': '250px',
        '300': '300px',
        '350': '350px',
        '375': '375px',
        'full': '100%'
      },
      minWidth: {
        '40': '40px',
      },
      maxWidth: {
        960: '960px',
        '40': '40px',
        'full': '100%'
      },
      boxShadow: {
        x: '0 0 5 rgba(0, 0, 0, 0.10)',
        s: '0 1px 2px 0 rgba(0, 0, 0, 0.29)',
        b: '0 2px 2px 0 rgba(0, 0, 0, 0.29)',
      },
      extend: {
        screens: {
          'towers': '1400px',
          'print': {'raw': 'print'},
          'max-sm': {'max': '767px'}
        },
        inset: {
          '50': '50%',
          'full': '100%',
        },
        zIndex: {
          '60': 60,
          '70': 70,
          '80': 80,
          '200': 200
        }
      }
    }
  }
