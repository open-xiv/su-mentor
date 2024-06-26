/// <reference types="vitest" />
import vue from "@vitejs/plugin-vue";
import {resolve} from "path";
import AutoImport from "unplugin-auto-import/vite";
import {defineConfig} from "vite";
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: ["vue"],
            dts: "./src/auto-imports.d.ts",
            eslintrc: {
                enabled: true,
                filepath: resolve(__dirname, ".eslintrc-auto-import.json"),
            },
        }),
        createSvgIconsPlugin({
            iconDirs: [resolve(__dirname, "src/assets/icons")],
            symbolId: "icon-[dir]-[name]",
        }),
    ],
    clearScreen: false,
    envPrefix: ["VITE_", "TAURI_"],
    server: {
        port: 5174,
        strictPort: true,
    },
    build: {
        outDir: "./dist",
        // See https://tauri.app/v1/references/webview-versions for details
        target: ["es2021", "chrome100", "safari13"],
        minify: !!!process.env.TAURI_DEBUG,
        sourcemap: !!process.env.TAURI_DEBUG,
        emptyOutDir: true,
    },
    test: {
        include: ["tests/unit/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    },
});
