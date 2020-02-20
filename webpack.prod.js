const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const worboxPlugin = require('workbox-webpack-plugin')

module.exports = {
    entry: {
                index:'./src/client/index.js',
                serviceWorker: './src/client/serviceWorker.js'
            },
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({filename: '[name].css'}),
        new worboxPlugin.GenerateSW({
            skipWaiting: true,
            clientsClaim: true
        })
    ]
}
