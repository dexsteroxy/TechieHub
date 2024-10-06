
// import type { Config } from "tailwindcss";

// const config: Config = {
  
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         black: {
//           DEFAULT: "#000",
//           100: "#000319",
//           200: "rgba(17, 25, 40, 0.75)",
//           300: "rgba(255, 255, 255, 0.125)",
//         },
//       }
//     },
//   },
//   plugins: [],
// };
// export default config;








import type { Config } from "tailwindcss";


// This plugin adds each Tailwind color as a global CSS variable, e.g., var(--gray-200)
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const addVariablesForColors = ({ addBase, theme }: any) => {
  const allColors = theme("colors"); // Get colors directly from the theme
  const flattenColors = (colorsObj: any, prefix = '') => {
    return Object.keys(colorsObj).reduce((acc: any, key) => {
      const value = colorsObj[key];
      const newKey = prefix ? `${prefix}-${key}` : key;

      if (typeof value === 'string') {
        acc[`--${newKey}`] = value;
      } else {
        Object.assign(acc, flattenColors(value, newKey));
      }

      return acc;
    }, {});
  };

  const colorVars = flattenColors(allColors);
  addBase({
    ":root": colorVars,
  });
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}", // Added this to include tsx files
  ],
  darkMode: "class", // Enables dark mode with the 'class' strategy
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },

      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },

      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        blue: {
          "100": "#E4ECFF",
        },
        purple: "#CBACF9",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
    },
  },
  plugins: [
    addVariablesForColors, // Plugin to add CSS variables for colors
  ],
};

export default config;
