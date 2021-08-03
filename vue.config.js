const path = require("path");

module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 8080,
    public: "0.0.0.0:8080",
  },

  publicPath: "/",
  outputDir: process.env.OUTPUT_DIR || "dist",

  chainWebpack: (config) => {
    const svg = config.module.rule("svg");
    svg.uses.clear();
    svg.use("vue-svg-loader").loader("vue-svg-loader");

    config.plugin("html").tap((args) => {
      args[0].title = "Warren Brasil - Daniel Andrade";
      return args;
    });
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/styles/main.less")],
    },
  },
};
