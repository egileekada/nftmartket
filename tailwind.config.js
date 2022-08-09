/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Mulish-ExtraBold': [
        'Mulish-ExtraBold',
      ],
      'Mulish-Bold': [
        'Mulish-Bold',
      ],
      'Mulish-Medium': [
        'Mulish-Medium'
      ],
      'Mulish-Regular': [
        'Mulish-Regular'
      ],
      'Mulish-SemiBold': [
        'Mulish-SemiBold'
      ],
      'NotoSans-ExtraBold': [
        'NotoSans-ExtraBold',
      ],
      'NotoSans-Bold': [
        'NotoSans-Bold',
      ],
      'NotoSans-Medium': [
        'NotoSans-Medium'
      ],
      'NotoSans-Regular': [
        'NotoSans-Regular'
      ],
      'NotoSans-SemiBold': [
        'NotoSans-SemiBold'
      ]
    },
    spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
      100: '48rem',
      '400px': '400px',
      '560px': '560px',
      '600px': '680px',
      '900px': '900px',
      '1360px': '1360px',
      '70vh': '70vh',
      '80vh': '80vh'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1360px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
