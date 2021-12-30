module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        cesnetblue: '#0068a2',
        freshblue: '#00a1de',
        darkgrey: '#5a5a5a',
        lightgrey: '#aaaaaa',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
