module.exports = {
  corePlugins: {
    container: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
  content: [
    './templates/**/*.twig',
  ],
  theme: {
    extend: {
      minHeight: {
        'screenh' : '100vh',
      },
    },
    fontFamily: {
      sans: ['Equip', 'Cabin', 'sans-serif'],
      serif: ['Freight Display', 'serif'],
    },
  },
};
