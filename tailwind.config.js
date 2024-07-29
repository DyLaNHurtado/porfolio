module.exports = {
  content: ['./src/**/*.{astro,vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /(border|bg)-(red|green|orange|yellow|violet|blue|lime|emerald|teal|sky|purple|fuchsia|pink)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['hover', 'focus'],
    },
  ],
}
