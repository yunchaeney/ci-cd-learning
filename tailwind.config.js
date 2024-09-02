const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(select|listbox|divider|popover|button|ripple|spinner|scroll-shadow).js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        codeit: {
          purple: "#6500c3",
        },
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(calc(-50%))" },
        },
        horizon: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50%))" },
        },
      },
      animation: {
        "slide-fast": "slide 10s linear infinite",
        "slide-slow": "slide 15s linear infinite",
        "slide-horizon": "horizon 15s linear infinite",
        "spin-slow": "spin 6s linear infinite",
        "spin-slow-reverse": "spin 4s linear infinite reverse",
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".gradient-mask-b": {
          maskImage: "linear-gradient(to top, transparent 20%, black 50%)",
        },
      });
    },
  ],
};
