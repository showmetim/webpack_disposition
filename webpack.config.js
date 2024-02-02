const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "production", //打包模式
  entry: './src/index.js', //指定打包时的主文件
  output: {
    filename: 'main.js',  //打包后的文件名
    path: path.resolve(__dirname, 'dist'),  //指定打包的路径
    clean: true,  //是否自动清空打包的文件夹
  },
  // webpack默认只能对js文件打包，则加入loader
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },  //css-loader对css文件进行处理,style-loader使用css文件
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: "asset/resource" }, //通过指定type直接处理图片资源数据
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },  //使用babel-loader转换js兼容性更强的语法
    ],
  },
  // 插件
  plugins: [
    // 生成一个 HTML5 文件
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  // 本地服务
  devServer: {
    host: "localhost", // 启动服务器域名
    port: "8080", // 启动服务器端口号
    open: true, // 是否自动打开浏览器
  },
  // 源代码到构建后代码映射，方便开发时调试
  devtool:'source-map',
}