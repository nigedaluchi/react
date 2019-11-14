var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/js/root.js",
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        }
      },

      //下面是添加的 css 的 loader，也即是 css 模块化的配置方法，大家可以拷贝过去直接使用
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ]
  },
  output: {
    path: __dirname,
    filename: "./src/bundle.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],

  devServer: {
    proxy: {
      '/API/': {    // 定义代理的名称
        changeOrigin: true,  // 是否启动代理
        target: 'http://v.juhe.cn/toutiao/index?', // 代理的域名
　　　　　pathRewrite: {'^/API':'/'}  // 如果你的真实的api路径中没有/API这一个路径，把这句加上，如果本来就有/API这一路径的话，这句一定要去掉，要不然会导致域名找不到的
      }
    }
  },
};
