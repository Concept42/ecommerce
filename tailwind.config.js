/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './public/**/*.html',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  plugins: [require('flowbite/plugin')],

  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
}
