/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {
      fontFamily: {[`sans`]: [`Nunito`, `sans-serif`]},
    },
  },
  plugins: [],
}

