/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
            primary: "#e23030",
         },
         backgroundImage: {
            hero: "hero-image/hero.jpg",
         },
      },
   },
   plugins: [],
   safelist: [
      {
         pattern: /content-.*/,
      },
   ],
};
