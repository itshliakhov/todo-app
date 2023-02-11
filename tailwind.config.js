const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{html,js,jsx}'],
    theme: {
        screens: {
            'xsm': '320px',
            ...defaultTheme.screens,
        },
    },
    plugins: [],
}