require('ignore-styles')
require('@babel/core')
require("@babel/register")({
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/transform-runtime']
});

require('./server')