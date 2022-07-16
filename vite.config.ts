import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import linaria from "@linaria/rollup";

export default defineConfig({
    plugins: [
        linaria(),
        react(), // comment out to make it run again :(
    ],
    root: "./src"
});
