"use strict"
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    context: path.resolve(__dirname, "../"),
    entry: "./src/app.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "auto"
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
                    "style-loader",
                    "css-loader",
                    {
                        loader: 'postcss-loader',    
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
            template: "./src/index.html"
        }),
    ],
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, "../dist"),
        hot: true
    },
    resolve: {},
    devtool: 'source-map',
    mode: "development"
}