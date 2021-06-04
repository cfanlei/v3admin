# 开发流程

## 1.基础环境搭建

### 1.tailwindcss 安装

* **npm安装**

```js
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

* 创建配置文件

```js
//生成您的 tailwind.config.js 和 postcss.config.js 文件
npx tailwindcss init -p
```

* [参考地址]( https://www.tailwindcss.cn/docs/guides/vue-3-vite)

### 2.lint

* eslint    

  ```js
  //eslint --init 
  module.exports = {
    "env": {"browser": true, "es6": true, "node": true},
    "extends": [
      "eslint:recommended",
      "plugin:vue/essential",
      'plugin:prettier/recommended',// 使用prettier中的样式规范，且如果使得ESLint会检测prettier的格式问题，同样将格式问题以error的形式抛出. 确保在最后一个.
    ],
    "globals": {"Atomics": "readonly", "SharedArrayBuffer": "readonly"},
    "parserOptions": {"ecmaVersion": 2018, "sourceType": "module"},
    "plugins": ["vue"],
  };
  
  
  ```

  

* vue格式化

  ```js
  npm i prettier eslint-config-prettier eslint-plugin-prettier -D
  ```

  

### 3.风格

```
e24329   //	偏红
fc6d26   //   主要风格 1
fca326   //   2   1->2渐变
```

