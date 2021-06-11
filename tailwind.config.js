module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      zx: -10,
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
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
