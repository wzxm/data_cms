<template>
  <div class="hello">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if='error' class="error">
      {{ error }}
    </div>

    <div v-if='post' class="content">
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        <br>
        <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      error: null,
      post: null,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    // 组件创建完成后获取数据
    // 此时 data 已经被 observed 了
    this.fetchDate()
  },
  watch: {
    '$route': 'fetchDate'
  },
  methods: {
    fetchDate () {
      this.error = this.post = null
      this.loading = true
      setTimeout(function () {
        this.post = true
        this.loading = false
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.hello {
  width: 50%;
  margin: 0 auto;
  text-align: center;
}
</style>
