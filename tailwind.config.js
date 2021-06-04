module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      zx: -10,
    },
    screens: {
      "3xl": "1920px", // 配置桌面版断点
    },
    extend: {},
  },
  corePlugins: {
    // 禁用浮动
    float: false,
    preflight: false, //禁用基础样式
  },
  variants: {
    extend: {
      borderStyle: ["focus", "hover"],
      borderWidth: ["hover", "focus"],
      divideWidth: ["hover", "focus"],
      borderOpacity: ["hover", "focus"],
      width: ["hover"],
    },
  },
  plugins: [],
};
