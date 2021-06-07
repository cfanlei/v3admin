module.exports = {
  chainWebpack: (config) => {
    config.module.rule("ts").uses.delete("ts-loader");
    config.module.rule("tsx").uses.delete("ts-loader");
  },
};
