/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            "backgroundImage": {
                'sprite-pokeball': "url('/src/assets/pokeball-grey.jpg')",
            },
            "fontFamily": {
                'poppins': ['Poppins']
            },
            "colors": {
                'normal': '#A8A77A',
                'fire': '#EE8130',
                'water': '#6390F0',
                'electric': '#F7D02C',
                'grass': '#7AC74C',
                'ice': '#96D9D6',
                'fighting': '#C22E28',
                'poison': '#A33EA1',
                'ground': '#E2BF65',
                'flying': '#A98FF3',
                'psychic': '#F95587',
                'bug': '#A6B91A',
                'rock': '#B6A136',
                'ghost': '#735797',
                'dragon': '#6F35FC',
                'dark': '#705746',
                'steel': '#B7B7CE',
                'fairy': '#D685AD',
                'pokered': {
                    '50': '#fff0f0',
                    '100': '#ffdddd',
                    '200': '#ffc0c0',
                    '300': '#ff9494',
                    '400': '#ff5757',
                    '500': '#ff2323',
                    '600': '#ff1515',
                    '700': '#d70000',
                    '800': '#b10303',
                    '900': '#920a0a',
                    '950': '#500000',
                },
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
}