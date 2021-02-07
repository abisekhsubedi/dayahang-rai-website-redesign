module.exports = {
    plugins: [
        require("cssnano"),
        // require("postcss-preset-env"),
        // console.log("cssnano"),
        require('autoprefixer'),
        console.log("autoprefixer"),
        // require("postcss-pxtorem"),
        // console.log("postcss-pxterm"),
        // require("postcss-font-magician")({
            // foundries: "google"
        // }),
        // console.log("postcss-font-magician"),
    ]
}