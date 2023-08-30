/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      primary: ['var(--font-poppins)'],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '30px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1280px',
      xl: '1676px',
    },
    extend: {
      backgroundImage: {
        heroText: "url('../public/assets/img/accaro.svg')",
        blob: "url('../public/assets/img/blob.svg')",
      },
      content: {
        arrow: "url('../public/assets/img/arrow.svg')",
        rope: "url('../public/assets/img/rope.svg')",
        pattern: "url('../public/assets/img/pattern.svg')",
        ornament: "url('../public/assets/img/ornament.svg')",
      },
      colors: {
        primary: '#161515',
        accent: {
          DEFAULT: '#FD5956',
          hover: '#EB4441',
        },
        grey: '#5F5F5F',
        body: '#FFFEFD',
      },
    },
  },
  plugins: [],
}
