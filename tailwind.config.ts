import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  // Needed for dark mode
  //darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        gray: {
          25: '#FCFCFD',
          50: '#F9FAFB',
          100: '#F2F4F7',
          200: '#E4E7EC',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
          900: '#101828',
          950: '#0C111D',
        },
        primary: {
          DEFAULT: '#5CE5F8', // 400
          25: '#FCFAFF',
          50: '#EEFDFF',
          100: '#E0FBFF',
          200: '#C1F7FF',
          300: '#A2F4FF',
          400: '#5CE5F8',
          500: '#4DD5E8',
          600: '#09C0D8',
          700: '#0794A6',
          800: '#044E58',
          900: '#123236',
          950: '#04181B',
        },
        'gray-blue': {
          DEFAULT: '#4E5BA6', // 500
          25: '#FCFCFD',
          50: '#F8F9FC',
          100: '#EAECF5',
          200: '#D5D9EB',
          300: '#B3B8DB',
          400: '#717BBC',
          500: '#4E5BA6',
          600: '#3E4784',
          700: '#363F72',
          800: '#293056',
          900: '#101323',
          950: '#0D0F1C',
        },
        error: {
          DEFAULT: '#F04438', // 500
          25: '#FFFBFA',
          50: '#FEF3F2',
          100: '#FEE4E2',
          200: '#FECDCA',
          300: '#FDA29B',
          400: '#F97066',
          500: '#F04438',
          600: '#D92D20',
          700: '#B42318',
          800: '#912018',
          900: '#7A271A',
          950: '#55160C',
        },
        warning: {
          DEFAULT: '#FDB022', // 400
          25: '#FFFCF5',
          50: '#FFFAEB',
          100: '#FEF0C7',
          200: '#FEDF89',
          300: '#FEC84B',
          400: '#FDB022',
          500: '#F79009',
          600: '#DC6803',
          700: '#B54708',
          800: '#93370D',
          900: '#7A2E0E',
          950: '#4E1D09',
        },
        success: {
          DEFAULT: '#12B76A', // 500
          25: '#F6FEF9',
          50: '#ECFDF3',
          100: '#D1FADF',
          200: '#A6F4C5',
          300: '#6CE9A6',
          400: '#32D583',
          500: '#12B76A',
          600: '#039855',
          700: '#027A48',
          800: '#05603A',
          900: '#054F31',
          950: '#053321',
        },
      },
      fontFamily: {
        sans: ['var(--font-brand)', ...fontFamily.sans],
      },
      fontSize: {
        '7xl': [
          '4.5rem',
          {
            lineHeight: '1',
            letterSpacing: '-0.09rem',
            fontWeight: '400',
          },
        ],
        '6xl': [
          '3.75rem',
          {
            lineHeight: '1',
            letterSpacing: '-0.075rem',
            fontWeight: '400',
          },
        ],
        '5xl': [
          '3rem',
          {
            lineHeight: '1',
            letterSpacing: '-0.06rem',
            fontWeight: '400',
          },
        ],
        '4xl': [
          '2.25rem',
          {
            lineHeight: '1.1',
            letterSpacing: '-0.045rem',
            fontWeight: '400',
          },
        ],
        '3xl': [
          '2rem',
          {
            lineHeight: '1.25',
            fontWeight: '400',
          },
        ],
        '2xl': [
          '1.5rem',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
        xl: [
          '1.25rem',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
        lg: [
          '1.125rem',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
        md: [
          '1rem',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
        sm: [
          '0.875rem',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
        xs: [
          '0.75rem',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
      },
      boxShadow: {
        xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        sm: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
        md: '0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)',
        lg: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        xl: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
      },
      strokeWidth: {
        0.5: '0.5',
        1.5: '1.5',
        2.5: '2.5',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  plugins: [],
};
export default config;
