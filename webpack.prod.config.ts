import * as ExtractTextPlugin from 'extract-text-webpack-plugin'
import * as path from 'path'
import * as UglifyJSPlugin from 'uglifyjs-webpack-plugin'
import * as webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import * as webpackMerge from 'webpack-merge'

import { commonConfig, cssLoaders } from './webpack.common'
import { Configuration } from './webpack2.api'

const prod: Configuration = {
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.css$/,

        use: ExtractTextPlugin.extract({
          use: cssLoaders,
          fallback: 'style-loader'
        })
      }
    ]
  },

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled', // change it to `server` to view bundle stats
      reportFilename: 'report.html',
      generateStatsFile: true,
      statsFilename: 'stats.json'
    }),

    new webpack.DefinePlugin({
      // do not use an object for 'process.env' otherwise all other environment
      // variables are set to 'undefined'
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),

    new UglifyJSPlugin(),

    new ExtractTextPlugin('app.[contentHash].css'),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      filename: 'app-[hash].min.js'
    })
  ]
}

export default webpackMerge(commonConfig, prod)
