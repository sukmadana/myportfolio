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

