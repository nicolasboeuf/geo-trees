const webpack = require('webpack')
module.exports = {
  pages: {
    'index':{
      entry: './src/pages/Home/main.js',
      title: 'Homepage',
      filename: 'index.html'
    },
    'our-team':{
      entry: './src/pages/our-team/main.js',
      title: 'Our-team',
      filename: 'our-team.html'
    },
    'project':{
      entry: './src/pages/project/main.js',
      title: 'Project',
      filename: 'project.html'
    },
    'data':{
      entry: './src/pages/data/main.js',
      title: 'Data',
      filename: 'data.html'
    },
    'about-us':{
      entry: './src/pages/about-us/main.js',
      title: 'About-us',
      filename: 'about-us.html'
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