import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "dark-grey": "#333333",
                purple: "#633CFF",
                grey: "#737373",
                "light-grey": "#FAFAFA",
                "hover-purple": "#BEADFF",
            },
        },
    },
    plugins: [],
};
export default config;
