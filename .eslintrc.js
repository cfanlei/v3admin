module.exports = {
  env: { browser: true, es6: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:prettier/recommended", // 使用prettier中的样式规范，且如果使得ESLint会检测prettier的格式问题，同样将格式问题以error的形式抛出. 确保在最后一个.
  ],
  globals: { Atomics: "readonly", SharedArrayBuffer: "readonly" },
  parserOptions: { ecmaVersion: 2018, sourceType: "module" },
  plugins: ["vue"],
};
