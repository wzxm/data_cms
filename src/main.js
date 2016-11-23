import Vue from 'vue'
import MintUI from 'mint-ui'

import App from './App'
import store from './vuex/store'
import router from './routers'

Vue.use(MintUI)

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
