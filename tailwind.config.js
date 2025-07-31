/* eslint-env node */
/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'soft-blue': '#a7c7e7',
        'soft-pink': '#f7cac9',
        'soft-purple': '#c3aed6',
        'glass': 'rgba(255,255,255,0.2)',
        'soft-indigo': '#e0e7ff'
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'soft': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px rgba(99, 102, 241, 0.4)',
        'hover': '0 8px 20px rgba(99, 102, 241, 0.2)'
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.1)', opacity: '1' }
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-1deg) translateX(-2px)' },
          '50%': { transform: 'rotate(1deg) translateX(2px)' }
        },
        'float-bird': {
          '0%': { transform: 'translateX(-100vw)' },
          '100%': { transform: 'translateX(100vw)' }
        },
        'breathe-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.1)', opacity: '1' }
        },
        'breathe-expand': {
          '0%, 100%': { transform: 'scale(0.95)', opacity: '0.4' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' }
        },
        'fade-breath': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' }
        },
        glow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1.1)' },
          '50%': { opacity: '0.5', transform: 'scale(1)' }
        },
        pulseCta: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(99,102,241,0.7)' },
          '50%': { boxShadow: '0 0 0 16px rgba(99,102,241,0)' }
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '100% 0' },
          '100%': { backgroundPosition: '-100% 0' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'soft-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.4' }
        }
      },
      animation: {
        breathe: 'breathe 4s ease-in-out infinite',
        'breathe-pulse': 'breathe-pulse 5s ease-in-out infinite',
        sway: 'sway 3s ease-in-out infinite',
        'breathe-expand': 'breathe-expand 5s ease-in-out infinite',
        'fade-breath': 'fade-breath 5s ease-in-out infinite',
        glow: 'glow 5s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'soft-pulse 4s ease-in-out infinite',
        pulseCta: 'pulseCta 2s infinite',
        fadeIn: 'fadeIn 2s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'fade-in': 'fade-in 1.5s ease-out forwards delay-300'
      }
    },
  },
  plugins: [],
}
