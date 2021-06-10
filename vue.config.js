const devTarget = "http://192.168.106.137:8080";
module.exports = {
  chainWebpack: (config) => {
    config.module.rule("ts").uses.delete("ts-loader");
    config.module.rule("tsx").uses.delete("ts-loader");
  },
};
