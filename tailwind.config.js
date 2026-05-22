/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A3D62', // Deep blue
          light: '#0D4E7E',
          dark: '#072C46',
        },
        accent: {
          DEFAULT: '#1E90FF', // Bright blue
          light: '#4DA6FF',
          dark: '#0073E6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
