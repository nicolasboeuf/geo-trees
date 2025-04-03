const webpack = require('webpack')
module.exports = {
  pages: {
    'index':{
      entry: './src/pages/Home/main.js',
      title: 'home',
      filename: 'index.html'
    },
    'about_us':{
      entry: './src/pages/about_us/main.js',
      title: 'about_us',
      filename: 'about_us.html'
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
  publicPath: process.env.NODE_ENV === "production" ? "/geo-trees" : "/",
  chainWebpack:
    config => {
      config.optimization.delete('splitChunks')
    }
}