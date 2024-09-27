import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "instrument-sans": ["var(--font-instrument_sans)"],
            },

            colors: {
                "dark-grey": "#333333",
                purple: "#633CFF",
                grey: "#737373",
                "light-grey": "#FAFAFA",
                "hover-purple": "#BEADFF",
                "focus-red": "#FF3939",
                "light-purple": "#EFEBFF",
            },
            boxShadow: {
                custom: "0px 0px 32px 0px rgba(0, 0, 0, 0.10)",
            },
        },
    },
    plugins: [],
};
export default config;
