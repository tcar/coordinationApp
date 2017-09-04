const webpack = require('webpack')
const path = require('path')

module.exports = {
    devtool: 'source-map',
    entry:'./client/index.js',
    output:{
        path:__dirname + '/client/public',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /(node_modules)/,
                use:'babel-loader'
            },
            {
                test:(/\.css$/),
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
        plugins: debug ? [] : [
   
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
],
}