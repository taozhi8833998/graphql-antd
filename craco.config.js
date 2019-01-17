const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
const WebpackBar = require("webpackbar")
const path = require("path")

// Don't open the browser during development
// process.env.BROWSER = "none";
const config = {
  webpack: {
    plugins: [
      new WebpackBar({ profile: true }),
      ...(process.env.NODE_ENV === "development"
        ? [new BundleAnalyzerPlugin({ openAnalyzer: false })]
        : [])
    ]
  },
}
console.log('webpack config = ', JSON.stringify(config, null, 2))
module.exports = config