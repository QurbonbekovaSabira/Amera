import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xl: "1535px",
      },
    },
    screens: {
      sm: "575px",
      md: "760px",
      lg: "1000px",
      xl: "1200px",
      "2xl": "1535px",
    },
    extend: {
      colors: {
        squant: "#666666",
        mercury: "#ebebeb",
        "basalt-grey": " #999999",
        "maui-mist": "#f0f1f3",
        bg: "#f1f2f6",
        blackLight: "rgba(0, 0, 0, 0.1)",
        bleck: "#000",
        "black-out": "#222222",
        "goshawk-grey": "#444444",
        white: "#fff",
        whiteOp: " rgba(255, 255, 255, 0.9)",
        "white-smoke": " #f5f5f5",
        bigStone: "#333e48",
        infinity: "#202935", //footer top
        "starlit-eve": "#394150", // footer bottom
        "dark-sea": " #4d5462", // footer border
        property: "#4d5669", // to top button
        "santas-grey": "#9da3af",
        "ghostly-tuna": "#e4e7f0",
        steam: "#dddddd",
        yellow: "#fcb700",
        "melted-butter": "#ffd156",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      boxShadow: {
        card: "0px 3px 5px 0px rgba(210,217,237,0.3)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-5px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        shine: {
          "100%": { left: "125%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slidein: "slidein 1s ease 700ms",
        shine: "shine 2s",
      },
      backgroundImage: {
        "chekout-bg": "url(/img/chekoutBg.jpg)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
