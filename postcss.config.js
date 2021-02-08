module.exports = {
    plugins: [
        require("postcss-preset-env")({
            stage: 0
        }),
        require('autoprefixer'),
        console.log("autoprefixer"),
        require("postcss-font-magician")({
            foundries: "google",


        }),
        console.log(require("postcss-font-magician")({
            foundries: "google",


        }), )

    ]
}