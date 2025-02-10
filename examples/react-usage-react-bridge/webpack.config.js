const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//const { rules } = require('./children/webpack.config.js')

//console.log('rules', rules)

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    //contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 1000,
    open: false,
    devMiddleware: {
      writeToDisk: true
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        currentVendors: {
          test: (module) => {
            return module.resource && module.resource.includes(path.resolve(__dirname, 'node_modules'))
          },
          name: 'current-vendors',
          chunks: 'all',
          reuseExistingChunk: true
        },
        r15vendors: {
          test: /[\\/]src[\\/]bridgecompont[\\/]/,
          name: 'r15vendors',
          chunks: 'all',
          priority: -10,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}
