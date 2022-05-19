module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            animate: {
                sideMove: {
                    "0%": { transform: "translateY(300px)" },
                    "50%": { transform: "translateY(-300px)" },
                    "100%": { transform: "translateY(300px)" },
                },
            },
            fontFamily: {
                spaceGrotesk: ["Space Grotesk"],
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                    xl: "5rem",
                    "2xl": "6rem",
                },
            },
            colors: { "darkb": "#0F172A" },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
