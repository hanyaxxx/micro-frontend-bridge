const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Vue2LoaderPlugin = require('vue-loader/lib/plugin')

module.exports = [
  {
    name: 'concurrently',
    mode: 'development',
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].js'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          exclude: [/node_modules/, /children\/vue3/],
          use: {
            loader: 'vue-loader'
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.vue']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new Vue2LoaderPlugin()
    ],
    devServer: {
      compress: true,
      port: 1003,
      open: false,
      devMiddleware: {
        writeToDisk: true
      }
    }
  }
]
