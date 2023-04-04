/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'service-category-lg': '900px',
      'service-box-sm': '660px',
      'service-box-md': '1020px',
      'service-box-lg': '1220px',
      xs: '400px',
      sm: '640px',
      md: '768px',
      'md-lg': '950px',
      lg: '1024px',
      'lg-md': '1060px',
      'lg-lg': '1120px',
      'lg-xl': '1170px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        cta: 'minmax(min(50vw, 30ch), 1fr) fit-content(400px)',
      },
      colors: {
        'primary-yellow': '#3a86ff',
        'primary-blue': '#273c75',
        'primary-blue-light': '#f2f2f2',
        'primary-dark': '#27272c',
        'primary-red': '#C23616',
        'primary-temp': '#f39c12',
        'primary-light': '#ecf0f1',
        'temp-primary-blue': '#ff7400',
        'temp-violet': '#6631c0',
        'temp-violet-dark': '#331b5d',
        'temp-violet-light': 'rgb(102 49 192 / 0.1)',
        'temp-white': '#bdc3c7',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],
};
