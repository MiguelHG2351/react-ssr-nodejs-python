const CompressioWebpackPlugin = require('compression-webpack-plugin')
const { commonPath } = require("./common.js");

module.exports = () => ({
    mode: 'production',
    entry: {
        main: [`${commonPath.entryApp}/index.js`],
    },
    devtool: 'source-map',
    output: {
        filename: 'static/[name]-[fullhash].bundle.js',
        clean: true,
    },
    plugins: [
        new CompressioWebpackPlugin({
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            filename: '[path][base].gz[query]',
        }),
    ]
})