module.exports = {
  purge: [`./src/**/*.js`, `./src/**/*.jsx`, `./src/**/*.ts`, `./src/**/*.tsx`],
  theme: {
    extend: {
      colors: {
        primary: {
          default: `#FCCA46`,
          dark: `#F29559`,
        },
        secondary: {
          default: `#F2D492`,
          dark: `#B8B08D`,
        },
        dark: {
          default: `#202C39`,
          light: `#283845`,
        },
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
