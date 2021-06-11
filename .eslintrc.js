module.exports = {
  env: { browser: true, es6: true, node: true },
  /* 指定如何解析语法。可以为空，但若不为空，只能配该值，原因见下文。*/
  parser: "vue-eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended", // 使用prettier中的样式规范，且如果使得ESLint会检测prettier的格式问题，同样将格式问题以error的形式抛出. 确保在最后一个.
  ],
  globals: { Atomics: "readonly", SharedArrayBuffer: "readonly" },
  parserOptions: {
    parser: "@typescript-eslint/parser" /* 解析ts语法 */,
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {}
};
