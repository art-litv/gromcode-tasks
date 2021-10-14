const path = require("path");

module.exports = {
  entry: {
    profile: "./src/profile/index.js",
    dashboard: "./src/dashboard/index.js",
    index: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "build"),
  },
  watch: false,
};
