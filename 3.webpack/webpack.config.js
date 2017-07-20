
const path = require('path');
var webpack = require('webpack');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const extractCSS = new ExtractTextPlugin('css/css.css');
console.log(__dirname);
module.exports = {
    context: path.join(__dirname, './src'),
    entry: [
        "./index.tsx"
    ],
    output: {
        filename: "js/bundle.js",
        path: path.join(__dirname + "./wwwroot/dist/"),
        publicPath: '/dist/'
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".tsx", ".josn", ".png", ".jpg", ".js"],
    },
    devServer: {
        // 指定启动服务的更目录
        contentBase: path.join(__dirname, "./wwwroot"),
        // 指定端口号
        port: 8088,
        host: 'localhost',
        // 启用热更新
        hot: true,
        // 以下信息可有可无，为了完整
        inline: true,
        historyApiFallback: true,
        noInfo: false,
        // stats: 'minimal',
        publicPath: "/dist/",
        // layy:true,
        filename: "js/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            // {
            //     test: /\.css$/,
            //     use: ["style-loader", "css-loader"],
            //     use: extractCSS.extract({
            //         use: "css-loader"
            //     })
            // },
            {
                test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|gif|woff|ico|cur)$/,
                loader: 'url-loader?limit=1500&name=images/[hash:6].[ext]'
            },
            // fonts
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&name=dist/fa/[hash].[ext]&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?name=dist/fa/[hash].[ext]"
            }
        ]
    },
    plugins: [
        // extractCSS,
        new webpack.HotModuleReplacementPlugin(),
        // // 开启全局的模块热替换(HMR)
        new webpack.NamedModulesPlugin(),
        // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
    ]
};