const webpack = require('webpack')
const path = require('path')
var debug = process.env.NODE_ENV !== "production";

module.exports = {
    devtool: debug ? "inline-sourcemap" : false,
    entry:path.resolve(__dirname, 'client') + '/index.js',
    output:{
        path:path.resolve(__dirname, 'client') + '/public',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                include: path.resolve(__dirname, 'client'),
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                query: {
                    presets: ['react', 'es2015']
}
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