const path=require("path")

module.exports = {
  mode: "development",
  devtool: "none",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader"],
      },
      {
        test: /\.scss$/i,
        use: ["css-loader"],
      },
      {
        test: /\.jpg$/i,
        use: ["file-loader"],
      },
      {
        test: /\.scss$/i,
        use: ["sass-loader"],
      },
    ],
  },
};
