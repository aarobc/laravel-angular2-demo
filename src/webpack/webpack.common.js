var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('../helpers');

// workaround because fonts webpack weirdness
var ncp = require('ncp').ncp;
var source = "node_modules/bootstrap-sass/assets/fonts/bootstrap"
var destination = "public/fonts"
ncp(source, destination, function (err) {
 if (err) {
   return console.error(err);
 }
 console.log('done!');
})
module.exports = {
  entry: {
    polyfills: './resources/assets/typescript/polyfills.ts',
    vendor: './resources/assets/typescript/vendor.ts',
    app: './resources/assets/typescript/main.ts',
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file?name=public/fonts/[name].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      },
      { test: /.scss$/, loaders: ['raw-loader','sass-loader'] },
      // {
      //   test   : /\.css$/,
      //   loaders: ['style', 'css', 'resolve-url']
      // },
      // {
      //   test   : /\.scss$/,
      //   loaders: ['style', 'css', 'resolve-url', 'sass?sourceMap']
      // }
      // { test: /\.scss$/, loaders: ["style", "css", "sass"] },
      // {
      //     test: /\.scss$/,
      //     loader: 'style!css!sass'
      // }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    // new HtmlWebpackPlugin({
    //   template: './resources/assets/typescript/index.html'
    // })
  ]
};

