/** @type {import('tailwindcss').Config} */
import { TextTokens } from './src/utils/design/Text'
const plugin = require('tailwindcss/plugin')

import typography from './src/utils/typography'

const texts = TextTokens.reduce((acc, i) => {
  acc = { ...acc, ...i }
  return acc
}, {})

delete texts.nome

export const colors = {
  // Light MODE ----------------------------------------------

  'neutral-100': withOpacity('--neutral-100'),
  'neutral-70': withOpacity('--neutral-70'),
  'neutral-60': withOpacity('--neutral-60'),
  'neutral-30': withOpacity('--neutral-30'),
  'neutral-20': withOpacity('--neutral-20'),
  'neutral-10': withOpacity('--neutral-10'),

  primary: withOpacity('--primary'),
  'primary-light': withOpacity('--primary-light'),
  'primary-pure': withOpacity('--primary-pure'),
  'primary-pure-10': withOpacity('--primary-pure-10'),
  'primary-pure-dark': withOpacity('--primary-pure-dark'),

  'alert-error-10': withOpacity('--alert-error-10'),
  'alert-error': withOpacity('--alert-error'),

  'alert-warning-10': withOpacity('--alert-warning-10'),
  'alert-warning': withOpacity('--alert-warning'),

  'alert-success-10': withOpacity('--alert-success-10'),
  'alert-success': withOpacity('--alert-success'),

  // DARK MODE -----------------------------------------------
  'd-neutral-40': withOpacity('--d-neutral-40'),
  'd-neutral-30': withOpacity('--d-neutral-30'),
  'd-neutral-20': withOpacity('--d-neutral-20'),
  'd-neutral-10': withOpacity('--d-neutral-10'),
  // "white": withOpacity("--d-neutral-10"),

  'd-primary-light': withOpacity('--d-primary-light'),
  'd-primary-pure': withOpacity('--d-primary-pure'),
  'd-primary-pure-10': withOpacity('--d-primary-pure-10'),
  'd-primary-pure-dark': withOpacity('--d-primary-pure-dark'),

  'd-alert-error-10': withOpacity('--d-error-10'),
  'd-alert-error': withOpacity('--d-error'),

  'd-alert-warning-10': withOpacity('--d-warning-10'),
  'd-alert-warning': withOpacity('--d-warning'),

  'd-alert-success-10': withOpacity('--d-success-10'),
  'd-alert-success': withOpacity('--d-success'),

  white: withOpacity('--white'),
  transparent: 'rgba(255, 255, 255, 0)',
}

module.exports = {
  content: [
    './*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './stories/**/*.{vue,js,ts,jsx,tsx}',
  ],

  darkMode: ['class', '.body--dark'],

  safelist: ['text-primary-pure'],

  theme: {
    colors,

    spacing: {
      0: '0',
      1: '1px',
      2: '0.125rem',
      3: '3px',
      4: '0.25rem',
      6: ' 0.38rem',
      8: '0.5rem',
      9: '0.56rem',
      10: '.625rem',
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      18: '1.13rem',
      20: '1.25rem',
      24: '1.5rem',
      28: '1.75rem',
      32: '2rem',
      34: '2.75rem',
      40: '2.5rem',
      42: '2.63rem',
      48: '3rem',
      56: '3.5rem',
      64: '4rem',
      72: '4.5rem',
      80: '5rem',
      96: '6rem',
      120: '7.5rem',
      160: '10rem',
    },

    boxShadow: {
      sm: '0px 1px 1px 0px rgba(0, 0, 0, 0.06)',
      md: ' 0px -1px 2px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(1, 7, 27, 0.08), 0px 2px 1px rgba(1, 7, 27, 0.06), 0px 1px 3px rgba(1, 7, 27, 0.1)',
      lg: ' 0px 6px 10px rgba(1, 7, 27, 0.08), 0px 1px 18px rgba(1, 7, 27, 0.06), 0px 3px 5px rgba(1, 7, 27, 0.1)',
      xl: '0px 24px 38px rgba(0, 0, 0, 0.04), 0px 9px 46px rgba(0, 0, 0, 0.06), 0px 11px 15px rgba(1, 7, 27, 0.1)',
    },

    fontFamily: {
      sans: ['Onest', 'sans-serif'],
    },

    fontSize: {
      64: '4rem',
      48: '3rem',
      32: '2rem',
      24: '1.5rem',
      20: '1.25rem',
      18: '1.13rem',
      16: '1rem',
      14: '0.88rem',
      12: '0.75rem',
      10: '0.63rem',
    },

    extend: {
      screens: {
        xl: { max: '1920px' },
        lg: { max: '1440px' },
        md2: { max: '1280px' },
        md: { max: '1180px' },
        sm: { max: '600px' },
      },

      backgroundImage: {
        'background-app':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 15.56%)',
      },

      lineHeight: {
        100: '100%',
        140: '140%',
        150: '150%',
      },
      borderRadius: {
        generic: '3px',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      // prettier-ignore
      addUtilities(typography)
    }),
  ],
}

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}
