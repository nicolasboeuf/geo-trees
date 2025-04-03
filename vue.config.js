const webpack = require('webpack')
module.exports = {
  pages: {
    'index':{
      entry: './src/pages/Home/main.js',
      title: 'Homepage',
      filename: 'index.html'
    },
    'about-us':{
      entry: './src/pages/about-us/main.js',
      title: 'About-us',
      filename: 'about-us.html'
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
    'contact':{
      entry: './src/pages/contact/main.js',
      title: 'Contact',
      filename: 'contact.html'
    },
    'terms-of-reference':{
      entry: './src/pages/terms-of-reference/main.js',
      title: 'Terms-of-reference',
      filename: 'terms-of-reference.html'
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