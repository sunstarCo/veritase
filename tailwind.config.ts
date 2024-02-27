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
      fontFamily: {
        urbanist: ['var(--font-urbanist)'],
        inter: ['var(--font-inter)'],
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
        'sub-4': '#D9D9D9',
        'sub-5': '#4D4D4D',
        black: '#272928',
      },
      keyframes: {
        rightIn: {
          '0%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(0)'},
        },
        rightOut: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(100%)'},
        },
        showUpper: {
          '0%': {transform: 'translateY(60px)'},
          '100%': {transform: 'translateY(0)',opacity: '100%'},
        },
        rotate180: {
          to:{
            transform: 'rotate(180deg)'
          }

        },
        
        '-rotate90': {
          to:{
            transform: 'rotate(-90deg)'
          }},
          cardHover: {
            to:{
              width: '100%'
            }
  
          },
        ink: {
          to: {
            width: '180%',
            paddingTop: '180%',
            // transform: 'translateX(-50%) translateY(-50%)',
        }
        },
        show: {
          to: {
            opacity: '100%',
        }
        },
        reShow: {
          '0%': {opacity: '0%'},
          '100%': {opacity: '100%'},
        }
      },
      animation:{
        ink: 'ink 2.5s ease-in forwards',
        rotateRight: 'rotate180 0.3s ease-in-out forwards',
        rotateLeft: '-rotate90 0.3s ease-in-out forwards',
        show: 'show 0.7s ease-in-out forwards',
        show_delay_1s: 'show 1s ease-in-out forwards 1000ms',
        cardHover:'cardHover 0.3s ease-in-out forwards',
        reShow:'reShow 1.8s ease-in-out forwards',
        showUpper: "showUpper 0.5s ease-in-out forwards"
      }
    },
  },
  plugins: [],
};
export default config;
