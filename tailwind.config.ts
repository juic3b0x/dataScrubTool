// juic3b0x 2024 - tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Paths where Tailwind CSS will scan for class usage to optimize the final output CSS
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/index.html", // Add public/index.html as well
  ],
  theme: {
    extend: {
      // Extend the theme with additional styles
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Extend colors as needed (example colors shown)
      colors: {
        primary: '#1E40AF', // Example primary color
        secondary: '#6B7280', // Example secondary color
        accent: '#EF4444', // Example accent color
      },
      // Extend other themes such as font families (example shown)
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example font family
      },
      // Extend additional theme properties as needed
    },
  },
  // Add Tailwind plugins (examples shown)
  plugins: [
    require('@tailwindcss/forms'), // Optional: For better form styling
    require('@tailwindcss/typography'), // Optional: For better typography styling
    // Add additional plugins as required
  ],
};

export default config;
