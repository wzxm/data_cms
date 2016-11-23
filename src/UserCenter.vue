<!-- 模板部分 -->
<template>
  <div id="user">
    <!-- <img src="./assets/logo.png"> -->
    <Footers></Footers>
    <router-view class="view"></router-view>
  </div>
</template>


<!-- javascript 部分 -->
<script>
// 导入footer组件
import Footers from './components/footer'
// 导入路由
import Router from 'vue-router'

/**
 * default导出，使用关键字default，可将对象标注为default对象导出。default关键字在每一个模块中只能使用一次。它既可以用于内联导出，也可以用于一组对象导出声明中。
 */
export default {
  components: {
    Footers
  },
  init () {
    let router = new Router()
    router.push('/home/foor')// 跳转到home组件
  },
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  /**
   * [watch 增加路由监听，可以获得来源和去向页面]
   * @type {Object}
   */
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      // console.log(from)
    }
  }
}
</script>

<!-- css 样式部分 -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>