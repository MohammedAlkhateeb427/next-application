module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '576px',
        // => @media (min-width: 576px) { ... }
        tablet: '860px',
        // => @media (min-width: 768px) { ... }
        md: '960px',
        // => @media (min-width: 960px) { ... }

        lg: '1440px',
        // => @media (min-width: 1440px) { ... },
      },
      boxShadow: {
        light: '0 2px 4px 0 rgba(0, 0, 0, 0.10)',
        dark: '0 2px 4px 0 rgba(255, 255, 255, 0.10)',
      },
    },
  },
  plugins: [],
};
