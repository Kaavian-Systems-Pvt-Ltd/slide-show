const path = require('path');
const { CleanWebpackPlugin } = require ('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        filename: 'index.js'
      },
      mode: 'production',
      plugins: [ new CleanWebpackPlugin () ] ,
      module: {
        rules: [
            {
                test : /\.(js|jsx)$/ ,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },
              {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
        ]
      }
    }