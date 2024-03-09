/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royalBlue: "#2026D3",
        lightBlue: "rgba(32,38,211,0.16)",
        white: "#FFFFFF",
        sky: "#EDEFF2",
        mediumGray: "#616161",
        cloudySky: "#637381",
        sunsetCoral: "rgba(255,94,62,1)",
        shadeCoral: "rgba(255,94,62,0.08)",
        slateGray: "#919EAB",
        borderDark: "rgba(145,158,171,0.2)",
        purple: "#8E33FF",
        slateNavy: "#212B36",
        cyan: "#00B8D9",
        turquoise: "#CAFDF5",
        green: "#0AD603",
        saffron: "#FFAB00",
      },
    },
  },
  plugins: [],
};
