const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

let plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/template/index.html')
    }),
    new CopyPlugin({
        patterns: [{ 
            from: path.resolve(__dirname, '../static'),
            to: path.resolve(__dirname, '../dist/static')
        }]
    })
]

if (!isProd) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = {
    mode: isProd ? 'production' : 'development',
    entry: path.join(__dirname, '../src/index.ts'),
    output: {
        filename: 'main.js',
        path: path.join(__dirname, '../dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    devtool: isProd ? false : 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        clientLogLevel: 'warning',
        stats: 'errors-only',
        quiet: true,
    },
    plugins
}