# vue 脚手架学习笔记

vue 全家桶：
    - VueCore
    - vue-router
    - vuex

## vue 基础知识
1. 概念
    - vue 组件化： 
        1. 创建组件构造器： Vue.extend()
        2. 注册组件（全局组件）: Vue.component()
        3. 使用组件
    - 简单的创建方式：语法糖
      
    - 全局组件和局部组件：
        - 全局组件： 可以在多个vue示例中使用
    - 父组件和子组件通信：
        - 
        
        
2. vue 基本指令
    - `v-cloak` : 解决差值表达式闪烁问题
    - `v-text ` : 没有闪烁问题， 但是覆盖元素中原来的内容。但是插值表达式{{}}只会替换占位符的内容
    - `v-bind ` : 绑定属性，缩写是`：`
    - `v-on   ` : 绑定事件，缩写是`@`
    - `v-model` : 数据双向绑定
    - `v-for  ` : for循环
    - `v-if   ` : 控制dom元素的显示
    - `v-show ` : 控制dom元素的显示
    
3. vue 生命周期

```    
    new Vue({}) 
        ||
    beforeCreated() 第一个生命周期函数： 表示实例完全创建之前执行
        ||
      created()     第二个生命周期函数
        || 

      模板编译
        ||
    beforeMount()   第三个生命周期函数： 表示么，模板已经在内存中编辑完成，但是尚未把模板渲染到页面中
        ||                           （页面中的元素，还是模板字符串，还没有被真正替换）   
      mounted()     第四个生命周期函数： 内存中的模板已经真实渲染到页面中

```
    
    
## vue 环境配置
0. 卸载脚手架
    - npm uninstall -g @vue/cli: 卸载3.X版本
    - npm uninstall -g vue-cli : 卸载2.X版本

1. 安装node, npm, vue-cli
    - sudo npm install @vue/cli-init -g: 拉取vue2.X模块

    
2. vue 创建脚手架 两种方法：
    1. vue2.X
        - sudo cnpm install webpack: 利用国内镜像下再好依赖
        - vue init webpack vue2_demo
            ```
                ? Project name vue2_demo
                ? Project description A Vue.js project
                ? Author duhaipeng <duhaipeng@enn.cn>
                ? Vue build standalone
                ? Install vue-router? Yes
                ? Use ESLint to lint your code? No
                ? Set up unit tests No
                ? Setup e2e tests with Nightwatch? No
                ? Should we run `npm install` for you after the project has been created? (recommended) npm

            ```
    2. vue create vue3_demo

## vue2.X
1. 项目结构
    ```markdown
        ├── build/               # Webpack 配置目录
        ├── dist/                # build 生成的生产环境下的项目
        ├── config/              # Vue基本配置文件，可以设置监听端口，打包输出等
        ├── node_modules/        # 依赖包，通常执行npm i会生成
        ├── src/                 # 源码目录（开发的项目文件都在此文件中写）
        │   ├── assets/          # 放置需要经由 Webpack 处理的静态文件，通常为样式类文件，如css，sass以及一些外部的js
        │   ├── components/      # 公共组件
        │   ├── filters/         # 过滤器
        │   ├── store/    　　　  # 状态管理
        │   ├── routes/          # 路由，此处配置项目路由
        │   ├── services/        # 服务（统一管理 XHR 请求）
        │   ├── utils/           # 工具类
        │   ├── views/           # 路由页面组件
        │   ├── App.vue          # 根组件
        │   ├── main.js          # 入口文件
        ├── index.html           # 主页，打开网页后最先访问的页面
        ├── static/              # 放置无需经由 Webpack 处理的静态文件，通常放置图片类资源
        ├── .babelrc             # Babel 转码配置
        ├── .editorconfig        # 代码格式
        ├── .eslintignore        # （配置）ESLint 检查中需忽略的文件（夹）
        ├── .eslintrc            # ESLint 配置
        ├── .gitignore           # （配置）在上传中需被 Git 忽略的文件（夹）
        ├── package.json         # 本项目的配置信息，启动方式
        ├── package-lock.json    # 记录当前状态下实际安装的各个npm package的具体来源和版本号
        ├── README.md            # 项目说明（很重要，便于其他人看懂）
    ```

2. cli开发方式
    - 一切皆组件（xxx.vue），每一个组件中包含： 
        - html 代码(template)
        - js 代码 (script)
        - css 样式 (style)
    - 开发不再写html 文件，编写组件（XXX.vue），打包时vue cli 会将组件编译成运行的html
    
