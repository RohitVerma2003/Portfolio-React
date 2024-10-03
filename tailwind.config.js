/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        "mid-blue": '#8f9ba8'
      },
      screens: {
        'mobile': '375px',  // Custom breakpoint for tablets
        'tablet': '640px',  // Custom breakpoint for tablets
        'desktop': '1024px',  // Custom breakpoint for desktops
        'large-desktop': '1280px',  // Additional larger breakpoint
      },
    },
  },
  plugins: [],
};
