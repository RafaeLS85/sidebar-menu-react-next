const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  mode: "production",
  entry: "./src/index.js", // Cambiado a index.js
  output: {
    path: path.resolve(__dirname, "build"), // Usa __dirname
    filename: "index.js",
    libraryTarget: "commonjs2", // Cambiado a commonjs2 si es necesario para CommonJS
    library: {
      name: 'sidebar-menu-fvg',
      type: 'commonjs2', // Modificado para CommonJS2
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // Añadido soporte para TS/TSX
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
    "react-icons": "react-icons"
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'], // Añadido soporte para TS/TSX
    fallback: {
      fs: false,
      stream: require.resolve('stream-browserify'),
      zlib: require.resolve('browserify-zlib'),
      assert: require.resolve('assert/'),
      buffer: require.resolve('buffer/'),
      util: require.resolve('util/'),
      process: require.resolve('process/browser'),
    },
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "index.d.ts", to: "." }
      ]
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ]
};
