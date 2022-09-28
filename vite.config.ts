import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import linaria from "@linaria/rollup";

export default defineConfig({
    plugins: [
        linaria(),
        react({ jsxRuntime: 'classic' }), // comment out to make it run again :(
        // remove the config object with jsxRuntime above to see the second error
    ],
    root: "./src"
});
