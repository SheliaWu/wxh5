<!--
 * @Descripttion: 
 * @version: 
 * @Author: shelia
 * @Date: 2020-08-27 16:49:13
 * @LastEditors: shelia
 * @LastEditTime: 2020-08-28 18:19:10
-->
## multiple-spa
![vue](https://img.shields.io/badge/-vue-brightgreen)
![scss](https://img.shields.io/badge/-scss-brightgreen)
![yarn](https://img.shields.io/badge/-yarn-brightgreen)

> 基于vue-cli，提供一个多单页面应用开发的配置方案

### 🚀 使用
```bash
yarn install
yarn run dev (开发环境)
yarn run build (生产环境)
```

### 项目

#### 如何使用
在`src/pages`目录下新建单页应用

##### 目录结构


#### 注意事项
`.eslintrc`配置，如果使用了`eslint-plugin-vue`需要在`parsetOptions`里面设置`parser`，移除外部的p`arser`
> If you want to use custom parsers such as babel-eslint or typescript-eslint-parser, you have to use parserOptions.parser option instead of parser option. Because this plugin requires vue-eslint-parser to parse .vue files, so this plugin doesn't work if you overwrote parser option.


