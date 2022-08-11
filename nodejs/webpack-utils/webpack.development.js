const webpack = require("webpack");
const { commonPath } = require("./common.js");
const path = require("path");

module.exports = (opts) => {

    return {
        target: ["web"],
        entry: {
            main:`${commonPath.entryApp}/index.js`,
            __what: 'webpack-hot-middleware/client?path=/__what&timeout=2000&overlay=false'
        },
        output: {
            filename: '[name]-[fullhash].bundle.js',
        },
        devtool: 'inline-source-map',
        mode: "development",
        devServer: {
            historyApiFallback: true,
            hot: true,
            port: 3000,
            compress: true,
        },
        optimization: {
            runtimeChunk: 'single',
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
        ],
    }
}