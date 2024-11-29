import { defineConfig } from 'vite';
import path from "path";
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, "./src/components"),
            "@assets": path.resolve(__dirname, "./src/assets"),
        }
    },
    plugins: [
        react(),
        svgr()
    ],
})