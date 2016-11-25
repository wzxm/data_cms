import Vue from 'vue'
import VueRouter from 'vue-router'

// const Index = resolve => require(['./components/index'], resolve)
const EditContent = resolve => require(['./components/edit/editContent'], resolve)
const SystemManage = resolve => require(['./components/edit/systemManage'], resolve)
const FileManage = resolve => require(['./components/edit/fileManage'], resolve)
const UserManage = resolve => require(['./components/edit/userManage'], resolve)
const ActivityManage = resolve => require(['./components/edit/activityManage'], resolve)
const SystemLog = resolve => require(['./components/edit/systemLog'], resolve)
/**
 * 使用vue-router
 */
Vue.use(VueRouter)

/**
 * [VueRouter 创建一个路由器实例, 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置]
 */
const routes = [
  { path: '', component: EditContent },
  { path: '/index', component: SystemManage },
  { path: '/file', component: FileManage },
  { path: '/user', component: UserManage },
  { path: '/activity', component: ActivityManage },
  { path: '/log', component: SystemLog }
  // { path: '/main/:id', component: Editor, children: [{ path: 'Editor', component: Editor }] }
  // { path: '/index', component: Index }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(route => {
  // ...
})

// 最后面加上一个回车，代表语句结束，否则会报错
export default router
