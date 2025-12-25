
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Manrope', 'sans-serif'],
            },
            colors: {
                fb: {
                    blue: '#1877f2',
                    blueHover: '#166fe5',
                    dark: '#18191a',
                    darkCard: '#242526',
                    darkHover: '#3a3b3c',
                    darkBorder: '#3e4042',
                    lightText: '#e4e6eb',
                    secondaryText: '#b0b3b8',
                    green: '#42b72a',
                    // Light mode colors
                    white: '#ffffff',
                    lightBg: '#f0f2f5',
                    lightCard: '#ffffff',
                    lightHover: '#f0f2f5',
                    lightBorder: '#e4e6eb',
                    darkText: '#050505',
                    lightSecondaryText: '#65676b',
                }
            },
            maxWidth: {
                'profile': '940px',
            },
        },
    },
    plugins: [],
}
