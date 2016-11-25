import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import Vue from 'vue'
// import MintUI from 'mint-ui'

import App from './App.vue'
import store from './vuex/store'
import router from './routers'

// Vue.use(MintUI)

/**
 * [template 实例化Vue]
 * @type {String}
 */
new Vue({
  router,
  template: '<App/>',
  store,
  components: { App }
}).$mount('#app')
