/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files in the src directory
  ],
  darkMode: "class", // Enable dark mode via class
  theme: {
    extend: {
      colors: {
        "background-dark": "rgb(15, 15, 15)",
        "background-light": "rgb(255, 255, 255)",
        "text-dark": "white",
        "text-light": "rgb(201, 201, 201)",
        "input-background-dark": "#20212c",
        "input-background-light": "rgb(255, 255, 255)",
        "input-text-dark": "rgb(223, 223, 223)",
        "input-text-light": "rgb(34, 34, 34)",
        "error-bg-dark": "#262733",
        "error-bg-light": "#ffffff",
        "footer-text-dark": "rgb(223, 223, 223)",
        "footer-text-light": "rgb(70, 70, 70)",
        "header-bg-dark": "#2c2c2c",
        "header-bg-light": "#f9f9f9",
        "button-bg-dark": "#f30049",
        "button-bg-light": "#1477e9",
      },
    },
  },
  variants: {},
  plugins: [],
  // Add plugins here if needed
};
