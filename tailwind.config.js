/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Sans-serif
        inter: ['var(--font-inter)'],
        roboto: ['var(--font-roboto)'],
        poppins: ['var(--font-poppins)'],
        nunito: ['var(--font-nunito)'],
        lato: ['var(--font-lato)'],
        montserrat: ['var(--font-montserrat)'],
        opensans: ['var(--font-opensans)'],
        raleway: ['var(--font-raleway)'],
        
        // Serif
        playfair: ['var(--font-playfair)'],
        merriweather: ['var(--font-merriweather)'],
        sourcesans: ['var(--font-sourcesans)'],
        
        // Monospace
        firacode: ['var(--font-firacode)'],
        jetbrains: ['var(--font-jetbrains)'],
        spacemono: ['var(--font-spacemono)'],
        sourcecodepro: ['var(--font-sourcecodepro)'],
        inconsolata: ['var(--font-inconsolata)'],
      },
      backgroundImage: {
        "gradient-2": "linear-gradient(45deg,rgba(34, 24, 143, 1) 23%, rgba(253, 29, 29, 1) 63%, rgba(252, 176, 69, 1) 100%)",
        "gradient-3": "linear-gradient(90deg,rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)",
        "gradient-4": "linear-gradient(90deg, rgba(58, 180, 131, 1) 0%, rgba(29, 253, 253, 1) 50%, rgba(69, 176, 252, 1) 100%)",
      }
    },
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const newUtilities = {};
      Object.entries(theme('textShadow')).forEach(([key, value]) => {
        newUtilities[`.${e(`text-shadow-${key}`)}`] = { textShadow: value };
      });
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}
