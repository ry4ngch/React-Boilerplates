const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const sass = require('sass'); // Dart Sass for custom implementation

module.exports = {
  entry: "./src/app.js",
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.s?css$/, //configuring <style> tag in html using webpack
        use: [
          'style-loader', // Injects CSS into the DOM
          'css-loader',   // Handles normal CSS
          {
            loader: 'sass-loader', // Compiles SASS to CSS
            options: {
              implementation: sass, // Use Dart Sass as opposed to Node Sass
              sassOptions: {
                // Enable compatibility for older SCSS syntax
                quietDeps: true, // Suppresses warnings from dependencies
                // Silence deprecation warnings for @import
                deprecation: 'silence', // Equivalent to --silence-deprecation=import
                silenceDeprecations: ['legacy-js-api'], // Silence legacy JS API deprecation warnings
                includePaths: [path.resolve(__dirname, 'node_modules')], // Add node_modules for SCSS imports
              },
            },
          },  
        ],
      }
    ]
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: path.join(__dirname, 'public'),
    hot: true, // Enable Hot Module Replacement
    port: 8080, // Customize the port if needed
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
  },
  optimization: {
    splitChunks: false
  },
  plugins: [
    ...(process.env.NODE_ENV === 'development' ? [new BundleAnalyzerPlugin()] : []) // Only include BundleAnalyzerPlugin in development
  ],
  ignoreWarnings: [
    {
      module: /node_modules\/.*\.(scss|sass)$/, // Match the specific file path
      message: /Sass @import rules are deprecated and will be removed in Dart Sass 3\.0\.0/, // Match the deprecation message
    },
    {
      module: /node_modules\/.*\.(scss|sass)$/, // Ignore warnings from dependencies in node_modules
      message: /deprecation/, // Filter deprecation warnings
    },
  ],
}