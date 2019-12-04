const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const path = require("path");
const ManifestPlugin = require("webpack-manifest-plugin");

const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  devtool: isProd ? "hidden-source-map" : "cheap-source-map",
  entry: "./src/client/index.js",
  mode: process.env.NODE_ENV,
  output: {
    path: isProd ? path.join(process.cwd(), "./src/server/public") : "/",
    filename: isProd ? "assets/app.[chunkhash].js" : "assets/app.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".js"]
  },
  optimization: {
    minimizer: isProd ? [new TerserPlugin()] : [],
    splitChunks: {
      chunks: "async",
      name: true,
      cacheGroups: {
        vendors: {
          name: "vendors",
          chunks: "all",
          reuseExistingChunk: true,
          priority: 1,
          // filename: isProd ? "assets/vendor-[hash].js" : "assets/vendor.js",
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return chunks.some(
              chunk =>
                chunk.name !== "vendor" && /[\\/]node_modules[\\/]/.test(name)
            );
          }
        }
      }
    }
  },
  plugins: [
    !isProd ? new webpack.HotModuleReplacementPlugin() : () => {},
    isProd ? new ManifestPlugin() : () => {},
    isProd
      ? new CompressionPlugin({
          test: /\.js$|\.css$/,
          filename: "[path].gz"
        })
      : () => {},
    isProd
      ? new WebpackPwaManifestPlugin({
          name: "DubDubChat",
          shortname: "Rick & Morty Chat Generator 🦚",
          description:
            "Create the craziest conversations with the phrases of Rick and Morty.",
          background_color: "#efe8de",
          theme_color: "#81c140",
          icons: [
            {
              src: path.resolve("src/client/assets/icon.png"),
              sizes: [96, 128, 192, 256, 384, 512],
              destination: "icons"
            }
          ]
        })
      : () => {},
    isProd
      ? new WorkboxWebpackPlugin.GenerateSW({
          runtimeCaching: [
            {
              urlPattern: new RegExp(
                "https://rickandmortyapi.com/api/character/avatar/(.*).jpeg"
              ),
              handler: "CacheFirst",
              options: {
                cacheName: "avatars"
              }
            },
            {
              urlPattern: new RegExp("https://rickandmortyapi.com/"),
              handler: "NetworkFirst",
              options: {
                cacheName: "characters-api"
              }
            },
            {
              urlPattern: new RegExp(
                "https://rickandmorty-quotes.ielijose.now.sh/"
              ),
              handler: "NetworkFirst",
              options: {
                cacheName: "quotes-api"
              }
            }
          ]
        })
      : () => {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-transform-runtime",
              "babel-plugin-styled-components"
            ]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[hash].[ext]"
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};
