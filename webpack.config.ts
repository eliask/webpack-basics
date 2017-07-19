import * as webpack from 'webpack'
import * as webpackMerge from 'webpack-merge'

import { commonConfig, cssLoaders } from './webpack.common'
import { Configuration } from './webpack2.api'

const dev: Configuration = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders
      }
    ]
  },

  plugins: [new webpack.HotModuleReplacementPlugin()]
}

export default webpackMerge(commonConfig, dev)
