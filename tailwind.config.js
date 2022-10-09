/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './public/**/*.html',
    './src/components/**/*.{js,ts,jsx,tsx}',
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
