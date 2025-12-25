
import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        allowedHosts: true,
    },
    css: {
        postcss: "postcss.config.js",
    },
})