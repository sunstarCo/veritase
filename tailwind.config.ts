import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        red: '#FA0A0A',
        'light-red': '#F37379',
        'blue-1': '#B4CBF3',
        'blue-2': '#6D97DD',
        'blue-3': '#467CD7',
        'blue-4': '#173FB8',
        'blue-5': '#163B7B',
        'blue-6': '#0C2F52',
        'sub-1': '#EAEAEA',
        'sub-2': '#E7E7E7',
        'sub-3': '#CECECE',
        black: '#272928',
      },
    },
  },
  plugins: [],
};
export default config;
