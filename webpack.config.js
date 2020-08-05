const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        alias: {
        react: path.join(__dirname, 'node_modules', 'react'),
        },
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            },
        },
        {
            test: /\.s?css$/,

            // use: [
            //     {
            //         loader: 'style-loader',
            //     },
            //     {
            //         loader: 'css-loader',
            //     },
            // ],

            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    "css-loader", 
                    "sass-loader"
                ]
            })
        },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
        }),
        new ExtractTextPlugin("styles.css"),
    ],
};