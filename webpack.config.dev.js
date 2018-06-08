// dev config
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const outPath = path.resolve(__dirname, 'out/a/b/c/d');

module.exports = {
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, 'src/test.js'),

    output: {
        path: outPath,
        filename: 'test.js'
    },

    plugins: [
        // webpack-dev-server enhancement plugins
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src/index.html'),
            to: path.resolve(outPath, 'index.html')
        }, {
            // image copy
            from: path.resolve(__dirname, 'assets/images/love.jpg'),
            to: path.resolve(outPath, '../../love.jpg')
        }]),
        new ExtractTextPlugin("styles.css"),
    ],

    devServer: {
        hot: true,
        port: 4000,
        contentBase: path.resolve(__dirname),
        open: 'http://localhost:4000'
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }]
        }, {
            test: /\.(css|scss)$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader'],
                fallback: 'style-loader'
            })
        }, {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    }
};