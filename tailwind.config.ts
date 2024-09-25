import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#007AFF",
      },
      fontFamily: {
        urbanist: "Urbanist sans-serif",
        poppins: "Poppins sans-serif",
      },
      maxWidth: {
        max: "1310px",
        admin: "1152px",
      },
      screens: {
        zr: "0px",
        mb: "430px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
