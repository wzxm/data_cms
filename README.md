# vue-webpack

> A Vue.js project

> 使用 vue-cli 构建 webpack+vue 项目，增加了vue-router2.0

> 使用路由懒加载功能
```
const Foo = resolve => require(['./Foo.vue'], resolve)

##### 不需要改变任何路由配置，跟之前一样使用 Foo：

const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo }
  ]
})
```
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


相关教程：
> 1、[html-webpack-plugin](http://www.cnblogs.com/haogj/p/5160821.html)
