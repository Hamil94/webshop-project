const color = require("tailwindcss/colors");
const forms = require("@tailwindcss/forms");
const aspectRatio = require("@tailwindcss/aspect-ratio");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        colors: {
            ...color,
            white: "#ffffff",
            black: "#000000",
            "very-light-pink": "#c7c7c7",
            "text-input-field": "#f7f7f7",
            "hospital-green": "#acd9b2",
        },
        fontSize: {
            sm: "14px",
            md: "16px",
            lg: "18px",
        },
        backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
                "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        transitionProperty: {
            bg: "background-color",
            opacity: "opacity",
            transform: "transform",
            scale: "scale",
        },
        extend: {},
    },
    plugins: [forms, aspectRatio],
};
