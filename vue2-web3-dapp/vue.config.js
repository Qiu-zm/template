//npm install uglifyjs-webpack-plugin --save-dev
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path')

function resolve(dir = '') {
  return path.join(__dirname, './src', dir)
}
//npm i compression-webpack-plugin@5.0.1 --save-dev
const CompressionPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg|gif|png)(\?.*)?$/i;
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: 8080,
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    config.module
        .rule("graphql")
        .test(/\.(graphql|gql)$/)
        .use("graphql-tag/loader")
        .loader("graphql-tag/loader")
        .end();
  },
  configureWebpack: {
    resolve: {
      alias: {
        core: resolve('core'),
      },
    },
    optimization: {
      runtimeChunk: {
        name: (entrypoint) => `runtime~${entrypoint.name}`,
      },
      splitChunks: {
        minChunks: 2,
        minSize: 20000,
        maxAsyncRequests: 20,
        maxInitialRequests: 30,
        name: false,
      },
      minimizer: [new UglifyJsPlugin({
        sourceMap: false, uglifyOptions: {
            output: {
                comments: false //过滤注释       
            }, compress: {
                warnings: false, drop_console: true,//关闭console         
                drop_debugger: false,
                pure_funcs: ['console.log']
            }
        }
    })]
    },
    plugins: [
      new CompressionPlugin({
        test: productionGzipExtensions, // 需要压缩的文件类型
        threshold: 10240, // 归档需要进行压缩的文件大小最小值，我这个是10K以上的进行压缩
        deleteOriginalAssets: false, // 是否删除原文件
      }),
    ],
  },
}