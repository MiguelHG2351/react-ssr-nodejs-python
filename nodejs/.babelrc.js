
// module.exports = function (api) {
//   const presets = ["@babel/preset-env", "@babel/preset-react"];
//   const plugins = [];

//   if(api.env("development")) {
//     // react refresh
//     plugins.push("react-refresh/babel");
//   }

//   return {
//     presets,
//     plugins,
//   };
// };
module.exports = (api) => {
  // This caches the Babel config
  api.cache.using(() => process.env.NODE_ENV);
  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    // Applies the react-refresh Babel plugin on non-production modes only
  };
};