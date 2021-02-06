const fontFaceMagic = require("postcss-font-magician");
module.exports = {

    plugin: [
        require("cssnano")({
            preset: "default"
        }),
        require("autoprefixer"),
        require("postcss-pxtorem"),
        fontFaceMagic({
            foundries: "google",
            hosted: ["../src/assets/fonts/Modern-No-20.ttf"]
        })
    ]
}