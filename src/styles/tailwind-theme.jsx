import {  createTheme } from 'flowbite-react'

const customTheme = createTheme({
    button: {
        color: {
            primary: "bg-blue-500 hover:bg-blue-600 text-white",
            light: "bg-gray-100 hover:bg-gray-200 text-white",
        },
        size: {
            lg: "px-6 py-3 text-lg",
        },
    },
});

export default customTheme;