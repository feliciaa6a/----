//webpack配置文件
//给nodejs看的 遵循node模块规范
//src里面的遵循前端模块规范
//实现代码提示
/** @types {import('webpack').Configuration}  */
const path = require("path");
//引入插件
const HTMLPlugin = require('html-webpack-plugin');

//const devServer = require('webpack-dev-server');


module.exports = {
    mode: "production",
    entry: {
        home: './src/home.js',
        load: './src/load.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
    },


    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(htm|html)$/i,
                use: {
                    loader: 'html-loader',
                    options: {
                        esModule: false,
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: "url-loader",
                type: 'javascript/auto',
                // 设置配置选项
                options: {
                    // 如果小于8kb使用base64 处理
                    // 优点 减少对服务器的请求，减轻服务器端压力
                    // 缺点 体积会变大
                    limit: 8 * 1024,
                    pulbicPath: "/",
                    outputPath: "./asset/",
                    name: "[name].[ext]",    // 取hash值的前10位，ext保留原来的后缀名
                    esModule: false,    //关闭es6模块化
                }
            },
        ],

    },
    plugins: [
        new HTMLPlugin({
            template: './src/home.html',
            filename: 'home.html',
            chunks: ['home'], //引入对应的js(对应(entry)中的入口文件)
        }),
        new HTMLPlugin({
            template: './src/load.html',
            filename: 'load.html',
            chunks: ['load'],
        }),

    ],
}
