const webpack = require('webpack')
module.exports = {
  pages: {
    'index':{
      entry: './src/pages/Home/main.js',
      title: 'home',
      filename: 'index.html'
    },
    'secondpage':{
      entry: './src/pages/secondpage/main.js',
      title: 'secondpage',
      filename: 'secondpage.html'
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  },
  filenameHashing: false,
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === "production" ? "/geo-trees/" : "/",
  chainWebpack:
    config => {
      config.optimization.delete('splitChunks')
    }
}