import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

import User from './UserCenter'
import store from './vuex/store'
import router from './routers'

/**
 * [template 实例化Vue]
 * @type {String}
 */
new Vue({
  store,
  router,
  template: '<User/>',
  components: { User }
}).$mount('#user')

/* eslint-disable no-new */
// new Vue({
//   el: '#user',
//   router,
//   template: '<User/>',
//   components: { User }
// })
