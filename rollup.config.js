import rollupTypescript from "@rollup/plugin-typescript";

export default {
    input: "client-src/index.ts",
    output: {
        file: "client-dist/script.js",
        format: "iife"
    },
    plugins: [
        rollupTypescript()
    ]
};