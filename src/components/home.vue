<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <h2>{{ msg }}</h2>
    <div class="bottom">User {{ $route.params.id }}</div>
    <!-- exact 这个链接只会在地址为 /home/foor 的时候被激活 -->
    <router-link to="/home/foor" active-class="foor-active" exact>前往list列表页面</router-link>
    <router-link to="/home/foor/profile" active-class="foor-active" exact>前往list列表页面</router-link>
    <router-link to="/home/foor/posts" active-class="foor-active" exact>前往list列表页面</router-link>

    <transition name="slide-fade" mode="out-in">
      <router-view class="chile-view"></router-view>
    </transition>
</template>

<script>
export default {
  data () {
    return {
      title: 'vue + webpack 打包项目',
      msg: '作者：王哲'
    }
  },
  watch: {
    '$route' (to, from) {
      // const toDepth = to.path.split('/').length
      // const fromDepth = from.path.split('/').length
      // this.fade = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style type="text/css">
  .home {
    width: 50%;
    margin: 0 auto;
    text-align: center;
  }
  .bottom {
    margin: 20px 0;
  }
  .foor-active {
    color: red !important;
  }


  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    padding-left: 10px;
    opacity: 0;
  }
</style>