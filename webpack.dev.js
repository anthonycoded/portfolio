const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.tsx"), // Changed to .tsx for TypeScript entry
  output: {
    path: path.resolve(__dirname, "build/javascript"),
    filename: "bundle.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css",
      chunkFilename: "[id].css",
    }),
    new HotModuleReplacementPlugin(),
  ],
  devServer: {
    open: true,
    historyApiFallback: true,
    port: 3000,
    static: "./build",
    liveReload: true,
    hot: true, // Enable hot module replacement
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // Adjusted regex to include .ts and .tsx
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    node: "12",
                  },
                },
              ],
              "@babel/preset-react",
              "@babel/preset-typescript", // Added TypeScript preset
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/i,
        type: "asset/inline",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Ensure .ts and .tsx are resolved
    fallback: {
      "react/jsx-runtime": "react/jsx-runtime.js",
      "react/jsx-dev-runtime": "react/jsx-dev-runtime.js",
    },
  },
};
