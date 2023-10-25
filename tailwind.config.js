/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    './docs/content/**/*.md'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '15px',
        md:'15px',
        lg: '0',
      },
    },
    extend: {
      fontSize: {
        sm: ['14px', '20px'],
        base: ['18px', '24px'],
        lg: ['20px', '28px'],
      },
      fontFamily: {
        'mono': ['"Roboto Mono", monospace']
      },
    },
  },
  plugins: [],
}

