import type {RollupOptions} from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import workbox from "rollup-plugin-workbox-inject";


const options: RollupOptions[] = [
    {
        input: "build/js/app/main.js",
        output: {
            file: "build/js/app.js",
            format: "iife",
            name: "app",
        },
        plugins: [
            resolve({
                browser: true
            }),
            commonjs({
                sourceMap: false
            })
        ],
    },
    {
        input: "build/js/sw/main.js",
        output: {
            file: "sw.js",
            format: "iife",
            name: "sw",
        },
        plugins: [
            resolve({
                browser: true
            }),
            replace({
                "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production"),
            }),
            workbox({
                globDirectory: ".",
                globPatterns: [
                    "index.html",
                    "build/js/app.js",
                ]
            })
        ],
    }
];

export default options;