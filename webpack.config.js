const path = require(`path`);
const webpack = require(`webpack`);

module.exports = {
  entry: `./src/js/script.js`,
  output: {
    path: path.resolve(`./dist`),
    filename: `js/script.js`,
  },
  devtool: `sourcemap`,
  devServer: {
    contentBase: `./src`,
    historyApiFallback: true,
    hot: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: `babel-loader`,
          }, {
            loader: `eslint-loader`,
            options: {
              fix: true,
            },
          },
        ],
      }, {
        test: /\.(jpe?g|png|svg|woff|woff2|webp|gif)$/,
        loader: `url-loader`,
        options: {
          limit: 1000,
          context: `./src`,
          name: `[path][name].[ext]`,
        },
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
