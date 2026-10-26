/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  safelist: [
    'bg-blue-100', 'bg-green-100', 'bg-purple-100', 'bg-red-100', 'bg-yellow-100', 'bg-orange-100',
    'text-blue-600', 'text-green-600', 'text-purple-600', 'text-red-600', 'text-yellow-600', 'text-orange-600',
    'border-blue-200', 'border-green-200', 'border-purple-200', 'border-red-200', 'border-yellow-200', 'border-orange-200'
  ],
  theme: {
    extend: {
      screens: {
        // Single source of truth for the header's desktop/mobile switch.
        // The desktop nav needs ~1024px for its links plus ~150px for the
        // compact CTAs; below this the hamburger takes over. The desktop nav,
        // the hamburger button AND the mobile panel must all key off this one
        // name - when they disagreed (xl: vs lg:) widths 1024-1279 rendered
        // NO navigation at all. See scripts/visual-qa.mjs, which asserts that
        // exactly one of the two is visible at every tested width.
        nav: '1180px',
      },
      colors: {
        'brand-primary': '#0077CC',
        'brand-dark': '#071930',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Disable unused features for smaller bundle
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia: false,
  }
};
