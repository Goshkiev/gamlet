import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      'xl': '1.25rem',
      '3xl': ' 1.7rem',
      '9xl': '6.875rem',
      '10xl': '10rem'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        secondPageBg: 'rgba(36, 36, 36, 1)'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': 'rgb(255, 255, 255)',
      'black': 'rgb(0, 0, 0)',
      'bright-green': 'rgba(144, 220, 21, 1)',
      'light-green': 'rgba(137, 235, 12, 1)',
      'transparent-green': 'rgba(118, 231, 48, 0.55)',
      'transparent-gray': 'rgba(221, 221, 221, 0.2)',
      'dark-gray': 'rgba(36, 36, 36, 1)',
      'light-gray': 'rgba(135, 135, 135, 0.05)',
      'gray': 'rgba(217, 217, 217, 1)',
      'transparent-black': 'rgba(25, 25, 25, 0.8)',
      'another-gray': 'rgba(225, 225, 225, 1)'
    }
  },
  plugins: [],
};
export default config;
