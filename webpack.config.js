var path = require("path");

module.exports = (env) => {
  return {
    // mode: args.mode,
    // entry: config.entry,
    output: {
      path: "{output}",
      filename: "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg|mp4)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.less$/i,
          use: ["style-loader", "css-loader", "less-loader"],
        },
        {
          test: /\.html$/i,
          use: ["html-loader"],
        },
        {
          test: /\.js$|\.jsx$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    externals: {
      react: "React",
    },
    // watch: args.watch,
    watchOptions: {
      ignored: /node_modules/,
    },
  };
};