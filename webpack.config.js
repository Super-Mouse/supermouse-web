/**
 * Created by haozo on 2017/7/8.
 */

var path = require('path');
var webpack = require("webpack");
module.exports = {
    entry: {
        index : './src/entry.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].bundle.js',
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader','css-loader']},
            {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']},
            {test: /\.vue$/,loader: 'vue-loader'}
        ]
    },
    plugins: [
        //new webpack.optimize.CommonsChunkPlugin({name: 'common'})
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
};
