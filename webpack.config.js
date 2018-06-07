const path = require('path');

module.exports = {
    entry: {
        index: './src/script/index.js'
    },
    output: {
        path: path.resolve(__dirname,'build/script'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                include:[
                    path.resolve(__dirname,'src/script')
                ],
                loader: "babel-loader",
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' // compiles Less to CSS
                }]
            }
        ]
    }
}