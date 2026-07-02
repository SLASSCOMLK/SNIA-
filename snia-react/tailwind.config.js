/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        snia: {
          gold: {
            DEFAULT: '#F47B20',
            light: '#FDB813',
            dark: '#D4680B',
          },
          blue: {
            DEFAULT: '#004a99',
            light: '#3371b5',
            dark: '#003366',
          },
          darkBlue: '#0a1931',
          orange: '#E8650A',
          maroon: '#7A1B4C',
          text: {
            primary: '#1B2A4A',
            secondary: '#5a6a7e',
            muted: '#94a3b8',
          },
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

