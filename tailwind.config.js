const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primaryColor:  "#145587",
                secondaryColor:" #F9AD52",
                shadowColor: "#1455874D",
            },
        },
        variants: {
            extend: {
                opacity: ["disabled"],
                display: ["group-hover", "hover"],
                transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
            },
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
