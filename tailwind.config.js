/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./.storybook/**/*.{js,jsx}",
  ],
  prefix: "ui-",
  theme: {
    extend: {},
  },
  plugins: [],
}
