/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
      },
      boxShadow: {
        default:
          '20px 20px 60px #98aaaa,-20px -20px 60px #daf4f4',
        neumorphismlightinset:
          'inset 4px 4px 10px #98aaaa,inset -4px -4px 10px #daf4f4',
        neumorphismlight:
          '4px 4px 10px #98aaaa,-4px -4px 10px #daf4f4',
        neumorphismlightbutton:
          '4px 4px 10px #9db0b0,-4px -4px 10px #d5eeee'
      }
    },
  },
  plugins: [],
};
