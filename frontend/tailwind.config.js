/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        card: "1px 1px 5px 0px rgba(0,0,0,0.1)",
      },
      backgroundColor: {
        dark: "#161117",
        todo: "#221526"
      },
      borderColor: {
        input: "#34303a"
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
