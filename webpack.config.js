const webpack = require('webpack')
const path = require('path')

module.exports = {
    devtool:'source-map',
    entry:'./client/index.js',
    output:{
        path:path.resolve(__dirname, 'client','public '),
        filenam:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:'/node_modules/',
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
    }
}