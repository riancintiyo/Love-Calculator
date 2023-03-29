/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./template/**/*{html.twig, js}"],
  theme: {
    extend: {
      newCOmmerce: this.new,
    },
  },
  plugins: [],
}
