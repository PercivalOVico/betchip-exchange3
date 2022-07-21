module.exports = {

 // purge: [
 //   './src/**/*.html',
 //    './src/**/*.js',
 // ],

// darkMode: false, // or 'media' or 'class'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
   variants: {},
  plugins: [require('tw-elements/dist/plugin')],
}



