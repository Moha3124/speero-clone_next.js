/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@shadcn/ui/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#0050A0", foreground: "#ffffff" },
        secondary: { DEFAULT: "#F5F5F5", foreground: "#1a1a1a" },
      },
    },
  },
}
