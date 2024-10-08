/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "react-logo": "url('/src/assets/react-logo.svg')",
        "astro-logo": "url('/src/assets/astro-logo.png')",
        "tailwind-logo": "url('/src/assets/tailwind-logo.svg')",
      },
    },
  },
  plugins: [],
};
