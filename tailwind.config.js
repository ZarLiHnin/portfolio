/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      extend: {
        colors: {
          "blue-700": "#1e40af",
          "blue-600": "#2563eb",
          "yellow-500": "#eab308",
        },
        spacing: {
          2: "0.5rem",
          4: "1rem",
          6: "1.5rem",
        },
        fontSize: {
          sm: "0.875rem",
          md: "1rem",
          lg: "1.125rem",
        },
      },
    },
  },
  plugins: [typography],
};
