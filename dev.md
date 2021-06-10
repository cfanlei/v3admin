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

### 4.vue生态安装

```js
npm i vue-router@4 vuex@next  axios -S

//配置使用
vue-router:

```

### 5.ts

```js
$ npm i @vue/cli-plugin-typescript typescript ts-loader -S //用于项目中支持ts
```

* tsconfig.json

```js
//vuecli官方推荐配置
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    // 这样就可以对 `this` 上的数据属性进行更严格的推断
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "node"
  }
}
```

由于 ESLint 默认使用 [Espree](https://github.com/eslint/espree) 进行语法解析，无法识别 TypeScript 的一些语法，故我们需要安装 [`@typescript-eslint/parser`](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)，替代掉默认的解析器，别忘了同时安装 `typescript`：

```js
$ npm install --save-dev @typescript-eslint/parser
```

接下来需要安装对应的插件 [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) 它作为 eslint 默认规则的补充，提供了一些额外的适用于 ts 语法的规则。

```js
$ npm install --save-dev @typescript-eslint/eslint-plugin
```

* eslint检查ts

```js
$ npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser

需要将 eslint 的 parserOptions 中的 parser 设置为 @typescript-eslint/parser，
在没有用 typescript 之前我们一般使用的是 babel-eslint。plugins 中需要加上 plugin:@typescript-eslint，
extends 中则是使用 @typescript-eslint/recommended
```

* babel -ts

```js
/*
* @babel/plugin-transform-typescript，它的作用就是把代码中所有的 typescript 语法全部去掉，所以打包非常快。
*使用 @babel/plugin-transform-typescript 我们需要先去掉 Vue-Cli 中的 Webpack 中的 ts-loader 的配置
*/
$ npm i -D @babel/preset-typescript
* 配置该插件于babel配置文件@babel/plugin-transform-typescript

//vue.config.js 
  chainWebpack: (config) => {
    config.module.rule("ts").uses.delete("ts-loader");
    config.module.rule("tsx").uses.delete("ts-loader");
  },
```

### 6.mockjs

```js
npm install @types/mockjs -D
//使用import { mock } from "mockjs";
```

* 使用

```js
// 属性名   name
// 生成规则 rule
// 属性值   value
'name|rule':value
//生成规则的七种形式
'name|min-max': value
'name|count': value
'name|min-max.dmin-dmax': value
'name|min-max.dcount': value
'name|count.dmin-dmax': value
'name|count.dcount': value
'name|+step': value
```

* 属性值为字符串

  ```JS
  格式----'name|rule':string  
  
  1.'name|min-max':"hello"  //重复生命max-min个hello
  ```

  
