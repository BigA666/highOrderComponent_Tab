const webpack = require('webpack')
module.exports = {
    entry: {
        bundle: './src/main.js',
        context: './src/context.js',
        index: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist' // 服务环境下可以不写
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                use: ['babel-loader']
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff)$/,
                use: ['file-loader']
            }
            
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'NODE_ENV': '"development"'  // 生产环境   'production'是变量
        })
    ],
    devServer: {
        historyApiFallback: true, // 让BrowerRouter刷新后还会有页面 --> 亲测不管用
        open: true,
        port: 9000,
        noInfo: true,
        inline: true
    },
    resolve: {  
        extensions: ['.js', '.jsx']  // resolve.extensions  省略后缀名
    }
}