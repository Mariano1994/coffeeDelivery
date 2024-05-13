/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "yellow-dark": "#c47f17",
        yellow: "#DBAC2C",
        "yellow-light": "#f1e9c9",
        "purple-dark": "#4b2995",
        purple: "#8047f8",
        "purple-light": "#ebe5f9",
        "base-title": "#272221",
        "base-subtitle": "#403937",
        "base-text": "#574f4d",
        "base-label": "#8d8686",
        background: "#fafafa",
        "base-card": "#f3f2f2",
      },
      fontFamily: {
        headingFont: "Baloo+2",
        textFont: "roboto",
      },
      backgroundImage: {
        hero: 'url("./assets/background.png")',
      },
    },
  },
  plugins: [],
};
