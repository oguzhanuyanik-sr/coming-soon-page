import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
    colors: {
      'white-100': '#FFFFFF',
      'red-100': '#FF5466',
      'blue-100': '#C2D3FF',
      'blue-200': '#4C7BF3',
      'grey-100': '#969696',
      'grey-200': '#15202A',
    },
    fontFamily: {},
    boxShadow: {},
    backgroundImage: {},
    container: {
      center: true,
      padding: '2rem',
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
    },
  },

  plugins: [],
};
export default config;
