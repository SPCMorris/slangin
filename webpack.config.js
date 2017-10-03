module.exports = {
  context: __dirname,
  entry: {
    jsx: "./client/src/index.jsx",
    css: "./client/src/main.css",
    html: "./client/src/index.html"
  },

  output: {
    path: __dirname + "/client/static",
    filename: "bundle.js"
  },
  module: {
    preLoaders: [
        //Eslint loader
      { 
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: "eslint-loader"
      }
    ],
    loaders: [
      { 
        test: /\.html$/, 
        loader: "file?name=[name].[ext]" 
      },
      { 
        test: /\.css$/, 
        loader: "file?name=[name].[ext]" 
      },
      { 
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loaders: ["react-hot","babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: './.eslintrc'
  }
};
