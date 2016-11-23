<!-- 模板部分 -->
<template>
    <div class='footer'>
        <p>
            <router-link to="/home/foor" active-class="active">首页</router-link>
            <router-link to="/index" active-class="active">跳转index</router-link>
            <router-link to="/hello" active-class="active">跳转hello</router-link>
            <router-link to="/mint" active-class="active">Mint-UI示例</router-link>
            <router-link to="/inputBox" active-class="active">键盘组件</router-link>
        </p>
    </div>
</template>

<!-- javascript 部分 -->
<script>
export default {
  name: 'footer',
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    // this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData (to, from) {
      this.error = this.post = null
      this.loading = true
    }
  }
}
</script>

<!-- css 样式部分 -->
<style>
    .footer{
        width: 100%;
        background: #fff;
        border-top: 1px solid #dedede;
        display: table;
        padding-top: 50px;
    }
    .footer a{
        width: 12%;
        display: table-cell;
        text-align: center;
        text-decoration: none;
        color: #666
    }
    .active{
        color:red !important;
    }
</style>