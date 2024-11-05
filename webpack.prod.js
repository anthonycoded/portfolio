const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // Added CleanWebpackPlugin
const path = require("path");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "src", "index.tsx"), // Changed to .tsx if using TypeScript
  output: {
    path: path.resolve(__dirname, "build/javascript"),
    filename: "bundle.js",
    publicPath: "/", // Added publicPath for correct asset loading
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean the output directory before each build
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Match .ts and .tsx files
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(jsx|js)$/, // Match .js and .jsx files
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      browsers: "> 0.25%, not dead", // Use Browserslist for target support
                    },
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
        ],
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
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Added extensions for easier imports
    fallback: {
      "react/jsx-runtime": "react/jsx-runtime.js",
      "react/jsx-dev-runtime": "react/jsx-dev-runtime.js",
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all", // Code-splitting for better performance
    },
  },
};
