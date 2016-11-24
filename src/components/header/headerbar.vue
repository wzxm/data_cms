<template>
  <nav id="headerbar" class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <router-link to="/main" active-class="active" class="navbar-brand">Data-CMS</router-link>
        </div>
        <form class="navbar-form navbar-left" role="search">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="请输入搜索条件">
          </div>
          <button type="submit" class="btn btn-default">搜索</button>
        </form>
        <p v-if="!userState" class="navbar-text navbar-right">
          <button type="button" class="btn btn-default">登录</button>
          &nbsp;&nbsp;
          <button type="button" class="btn btn-info">注册</button>
        </p>
        <p v-if="userState" class="navbar-text navbar-right">
          <a href="javascript:;" class="navbar-link">
            <img alt="User Image" class="user-image" :src="data.headeImg">
            <span>{{username}}</span>
          </a>
          &nbsp;&nbsp;
          <button type="button" class="btn btn-default">退出</button>
          &nbsp;&nbsp;
          <button type="button" class="btn btn-danger">清除缓存</button>
        </p>
      </div>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      data: {
        headeImg: 'http://192.168.100.119:81/upload/touxiaong.png'
      }
    }
  },
  computed: mapGetters({
    username: 'getUserName',
    userState: 'getUserState'
  }),
  methods: {
    ...mapActions([
    ])
  },
  /**
   * [watch 增加路由监听，可以获得来源和去向页面]
   * @type {Object}
   */
  watch: {
    '$route' (to, from) {
    }
  }
}
</script>

<style type="text/css">
  /*.navbar {
    margin-bottom: 0;
    border-radius: 0;
  }*/
  .navbar-right .btn {
    padding: 0 12px;
  }
  .navbar-right .user-image{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: -2px;
  }
</style>