<template>
  <div id="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
import Toolbar from './components/toolbar'
import NotesList from './components/noteslist'
import Editor from './components/editor'

export default {
  components: {
    Toolbar, NotesList, Editor
  }
}
</script>

<style type="text/css">
@import url(https://fonts.googleapis.com/css?family=Raleway:400,300);

html, #app {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
  max-height: 100%;
  position: relative;
}

#toolbar {
  float: left;
  width: 80px;
  height: 100%;
  background-color: #30414D;
  color: #767676;
  padding: 35px 25px 25px 25px;
}

#notes-list {
  float: left;
  width: 300px;
  height: 100%;
  background-color: #F5F5F5;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
}

#list-header {
  padding: 5px 25px 25px 25px;
}

#list-header h2 {
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  font-size: 22px;
  padding-bottom: 8px;
}

#notes-list .container {
  height: calc(100% - 137px);
  max-height: calc(100% - 137px);
  overflow: auto;
  width: 100%;
  padding: 0;
}

#notes-list .container .list-group-item {
  border: 0;
  border-radius: 0;
}

.list-group-item-heading {
  font-weight: 300;
  font-size: 15px;
}

#note-editor {
  height: 100%;
  margin-left: 380px;
}

#note-editor textarea {
  height: 100%;
  border: 0;
  border-radius: 0;
}

#toolbar i {
  font-size: 30px;
  margin-bottom: 35px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.5s ease;
}

#toolbar i:hover {
  opacity: 1;
}

.starred {
  color: #F7AE4F;
}
</style>
<!-- <template>
  <div id="app">
    <img src="./assets/logo.png">
    <Footers></Footers>
    <transition :name="transitionName">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
// 导入footer组件
import Footers from './components/footer'
// 导入路由
import Router from 'vue-router'

/**
 * default导出，使用关键字default，可将对象标注为default对象导出。default关键字在每一个模块中只能使用一次。它既可以用于内联导出，也可以用于一组对象导出声明中。
 */
export default {
  // name: 'app',
  components: {
    Footers
  },
  init () {
    let router = new Router()
    router.push('/home')// 跳转到home组件
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
-->