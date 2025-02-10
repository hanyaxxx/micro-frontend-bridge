const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin: Vue3LoaderPlugin } = require('./children/vue3/node_modules/vue-loader/dist/index')
const Vue2LoaderPlugin = require('./children/vue2/node_modules/vue-loader/lib/plugin')
const Vue2TemplateCompiler = require('./children/vue2/node_modules/vue-template-compiler')
const glob = require('glob')

const vue2Entries = glob.sync('./children/vue2/src/pages/**/*.vue').reduce((entries, file) => {
  const name = path.basename(file, '.vue')
  entries[name] = path.resolve(file)
  return entries
}, {})

const isProduction = process.env.NODE_ENV === 'production'

//console.log('isProduction', process.env.NODE_ENV)
//console.log('vue2Entries', vue2Entries)
module.exports = [
  // config for index.jsx
  {
    name: 'vue3',
    mode: 'development',
    entry: './src/index.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.vue$/,
          exclude: [/node_modules/, /children\/vue2/],
          use: {
            loader: './children/vue3/node_modules/vue-loader/dist/index'
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
      isProduction
        ? new HtmlWebpackPlugin({
            template: './index-build.html',
            filename: 'index-v3.html'
          })
        : new HtmlWebpackPlugin({
            template: './index.html'
          }),
      new Vue3LoaderPlugin()
    ],
    devServer: {
      // contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
      open: true
    }
  },
  // config for index2.jsx
  {
    name: 'vue2',
    mode: 'development',
    entry: './src/index2.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },

        {
          test: /\.vue$/,
          include: [path.resolve(__dirname, 'children/vue2')],
          use: {
            loader: './children/vue2/node_modules/vue-loader/lib/index',
            options: {
              compiler: Vue2TemplateCompiler
            }
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
      isProduction
        ? new HtmlWebpackPlugin({
            template: './index-build.html',
            filename: 'index-v2.html'
          })
        : new HtmlWebpackPlugin({
            template: './index.html'
          }),
      new Vue2LoaderPlugin()
    ],
    devServer: {
      // contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9001,
      open: false
    }
  },
  // config for index3.jsx
  {
    name: 'concurrently',
    mode: 'development',
    entry: './src/index3.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.vue$/,
          exclude: [/node_modules/, /children\/vue2/],
          use: {
            loader: './children/vue3/node_modules/vue-loader/dist/index'
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
      isProduction
        ? new HtmlWebpackPlugin({
            template: './index-build.html',
            filename: 'index.html'
          })
        : new HtmlWebpackPlugin({
            template: './index.html'
          }),
      new Vue3LoaderPlugin()
    ],
    devServer: {
      // contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 1002,
      open: true
    }
  },
  {
    name: 'vue2-library',
    mode: 'production',
    entry: vue2Entries,
    watch: true,
    output: {
      path: path.resolve(__dirname, 'src/bridgeComponent'),
      filename: '[name].js',
      clean: true,
      library: {
        name: '[name]',
        type: 'umd'
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          include: [path.resolve(__dirname, 'children/vue2/src')],
          use: {
            loader: './children/vue2/node_modules/vue-loader/lib/index',
            options: {
              compiler: Vue2TemplateCompiler
            }
          }
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.vue']
    },
    plugins: [new Vue2LoaderPlugin()]
  }
]
