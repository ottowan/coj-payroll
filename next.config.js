const withSass = require("@zeit/next-sass");

module.exports = withSass({
  webpack: (config) => {
    //Fixes npm package that  depend on `fs` modile
    config.node = {
      fs: "empty",
    };
    return config;
  },
});