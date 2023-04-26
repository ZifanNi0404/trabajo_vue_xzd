
//webpack配置文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path') //这个path用来拼接路径的
module.exports = {
    mode: 'development',
    //打包入口
    entry: './src/index.js',
    //打包出口 对象
    output: {

        //path表示打包后的路径
        path: path.resolve(__dirname, 'output'),
        filename: 'my-webpack.js'
    },

    //配置loader处理其他文件
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
        ]
    },
    Plugins: [
        new MiniCssExtractPlugin(
            {
                filename: `[name]_[contenthash:8].css`,
            }
        )
    ]
}