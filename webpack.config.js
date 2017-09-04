const webpack = require('webpack')
const path = require('path')
var debug = process.env.NODE_ENV !== "production";

module.exports = {
    devtool: debug ? "inline-sourcemap" : false,
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
     resolve: {
    extensions: ['', '.js', '.jsx']
},
        plugins: debug ? [] : [
   
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
],
}