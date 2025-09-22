/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // your custom primary color
        accent: "#FBBF24",  // your custom accent color
      },
    },
  },
  plugins: [],
};
