"use strict"

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    context: path.resolve(__dirname),
    entry: "./src/app.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "./"),
        // publicPath: 'pathOrUrlWhenProductionBuild'
    },
    module: {
        rules: [{
                test: /\.html$/,
                exclude: /node_modules/,
                use: ["html-loader"]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: "asset/resource"
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        port: 8000,
        contentBase: path.resolve(__dirname, "/dist"),
        hot: true,
        inline: true
    },
    resolve: {},
    devtool: 'source-map',
    target: "web",
    mode: "development"
}