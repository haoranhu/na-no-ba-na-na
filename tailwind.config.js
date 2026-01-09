/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        banana: {
          50: '#fffef0',
          100: '#fffce0',
          200: '#fff8c0',
          300: '#fff4a0',
          400: '#ffef80',
          500: '#ffeb60',
          600: '#ffd700',
          700: '#ffc800',
        },
      },
    },
  },
  plugins: [],
}

