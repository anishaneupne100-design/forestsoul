import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
        "./resources/js/**/*.js",
        "./resources/css/**/*.css",
    ],

    theme: {
        extend: {
            colors: {
                primary: "#38ab66",
                "background-light": "#f6f8f7",
                "background-dark": "#141e18",
                "surface-dark": "#193322",
                "border-dark": "#326744",
                "text-main-dark": "#ffffff",
                "text-secondary-dark": "#92c9a4",
                "text-main-light": "#102216",
                "text-secondary-light": "#5a7864",
                "surface-light": "#e8ede9",
                "border-light": "#d1d9d3",
            },
            fontFamily: {
                display: ["Manrope", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
