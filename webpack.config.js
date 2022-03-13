/** @format */
module.exports = {
  module: {
    loaders: [{ test: /\.pdf$/, loader: "file-loader" }],
  },
  future: {
    webpack5: true,
  },
  webpack: function (config, options) {
    config.experiments = {};
    return config;
  },
};
