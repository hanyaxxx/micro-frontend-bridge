const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  name: 'vue-bridge-library',
  mode: 'development',
  entry: `${__dirname}/src/bridgeComponent/index.js`,
  watch: true,
  devtool: 'source-map',
  experiments: {
    outputModule: true // Enable module output experiment
  },
  output: {
    path: path.resolve(__dirname, '../../src/vuebridgeComponent'),
    filename: '[name].js',
    clean: false,
    library: {
      type: 'module'
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js']
  },
  plugins: [new VueLoaderPlugin()]
}
