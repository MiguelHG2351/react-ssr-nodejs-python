const webpack = require("webpack");
const { commonPath } = require("./common.js");
const path = require("path");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (opts) => {

    return {
        target: ["web"],
        entry: {
            main:`${commonPath.entryApp}/index.jsx`,
            __what: 'webpack-hot-middleware/client?path=/__what&timeout=2000&overlay=false&live-reload=true'
        },
        output: {
            filename: '[name]-[fullhash].bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.[jt]sx?$/,
                    exclude: /node_modules/,
                    use: [
                      {
                        loader: require.resolve('babel-loader'),
                        options: {
                            plugins: [require.resolve('react-refresh/babel')].filter(Boolean),
                        },
                      },
                    ],
                  },
            ]
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
            new ReactRefreshWebpackPlugin()
        ],
    }
}