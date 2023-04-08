import dotenv from "dotenv/config";
if(process.env.NODE_ENV !== 'production') { dotenv }

import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [ vue() ],
    server: {
        host: true,
        port: process.env.PORT
    }
})