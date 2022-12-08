const path = require('path');
const { CleanWebpackPlugin } = require ('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/index.js',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs'
      },
      resolve : {
        extensions : [ '.js' , '.jsx' ]
      } ,
      // mode: 'production',
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
                include : path.resolve (__dirname , './src')
              },
        ]
      }
    }