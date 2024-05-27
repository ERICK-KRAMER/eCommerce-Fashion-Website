/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'baner': 'url("./public/baner.png")',
        'aboutBaner': 'url("./public/aboutBaner.png")',
        'imageAbout': 'url("./public/about/image.png")',
        'imageAbout2': 'url("./public/about/image(1).png")',
      },
    },
  },
  plugins: [],
}