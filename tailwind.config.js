/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  // Remove @tailwindcss/line-clamp from the plugins array
  plugins: [
    // Other plugins if you have any
  ],
};
