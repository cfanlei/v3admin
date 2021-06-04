module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      "3xl": "1980px", // 配置桌面版断点
    },
    extend: {},
  },
  corePlugins: {
    // 禁用浮动
    float: false,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
