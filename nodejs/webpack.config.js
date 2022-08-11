const { merge } = require('webpack-merge');
const { constant } = require('./webpack-utils/common')
const common = require('./webpack-utils/webpack.common');

module.exports = (_, args) => {
    if(constant.WEBPACK_MODE.indexOf(args.mode) === -1) {
        throw new Error(`Mode parameter is invalid.`);
    }
    const modeConfig = require(`./webpack-utils/webpack.${args.mode}`);
    // console.log(modeConfig);
    return merge(common, modeConfig({
        mode: args.mode,
    }));
}
