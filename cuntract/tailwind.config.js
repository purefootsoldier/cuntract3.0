/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['autofill'],
      borderColor: ['autofill'],
      textColor: ['autofill'],
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('autofill', '&:-webkit-autofill');
      addVariant('autofill-focus', '&:-webkit-autofill:focus');
      addVariant('autofill-hover', '&:-webkit-autofill:hover');
    }
  ],
}

