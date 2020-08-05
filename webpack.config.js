const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

// load the mini csss extractor
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
    alias: {
      react: path.join(__dirname, "node_modules", "react"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        // test: /\.s?css$/,
        test: /\.s[ac]ss$/i,

        // use: [
        //     {
        //         loader: 'style-loader',
        //     },
        //     {
        //         loader: 'css-loader',
        //     },
        // ],

        // use: ExtractTextPlugin.extract({
        //     fallback: "style-loader",
        //     use: [
        //         "css-loader",
        //         "sass-loader"
        //     ]
        // }),

        /** This use for split the file of style */
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        
        /** This use for signle bundle file */
        // use: [
        //   // fallback to style-loader in development
        //   process.env.NODE_ENV !== "production"
        //     ? "style-loader"
        //     : MiniCssExtractPlugin.loader,
        //   "css-loader",
        //   "sass-loader",
        // ],

      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    
    // this use for load the plugin
    new MiniCssExtractPlugin(),

    //new ExtractTextPlugin("styles.css"),
    // new ExtractTextPlugin({
    //   filename: "bundle.css",
    //   disable: false,
    //   allChunks: true,
    // }),
  ],
};
