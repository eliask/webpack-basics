import * as autoprefixer from 'autoprefixer'
import * as precss from 'precss'

import { Configuration } from './webpack2.api'

export const cssLoaders = [
  {
    loader: 'style-loader'
  },
  {
    loader: 'css-loader',
    options: {
      sourceMap: true,
      importLoaders: 1
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: function () {
        return [precss, autoprefixer]
      }
    }
  }
]

export const commonConfig: Configuration = {
  entry: {
    app: './src'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: './.webpack.cache',
            presets: ['env'],

            // the 'transform-runtime' plugin tells babel to require the runtime
            // instead of inlining it.
            plugins: ['transform-runtime']
          }
        }
      }
    ]
  }
}
