import Vue from 'vue'
import VueRouter from 'vue-router'

// const Home = r => require.ensure([], () => r(require('./components/home')), 'group-foo')
// const Hello = r => require.ensure([], () => r(require('./components/hello')), 'group-foo')
// const List = r => require.ensure([], () => r(require('./components/list')), 'group-foo')
const Home = resolve => require(['./components/home'], resolve)
const Hello = resolve => require(['./components/hello'], resolve)
const Index = resolve => require(['./components/index'], resolve)
const Mint = resolve => require(['./components/mint'], resolve)
const InputBox = resolve => require(['./components/inputBox'], resolve)
const Animation = resolve => require(['./components/animation'], resolve)
// const Bar = resolve => require(['./components/bar'], resolve)
// import Home from './components/home'
// import Hello from './components/hello'
// import List from './components/list'

const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }

/**
 * 使用vue-router
 */
Vue.use(VueRouter)

/**
 * [VueRouter 创建一个路由器实例, 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置]
 */
const routes = [
  // { path: '/home', component: Home },
  { path: '/home/:id', name: 'home', component: Home, children: [{ path: '', component: UserHome }, { path: 'profile', component: UserProfile }, { path: 'posts', component: UserPosts }] },
  { path: '/hello', component: Hello },
  { path: '/index', component: Index },
  { path: '/mint', component: Mint },
  { path: '/inputBox', component: InputBox },
  { path: '/animation', component: Animation }
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
  // console.log(to)
  next()
})

router.afterEach(route => {
  // ...
})

// 最后面加上一个回车，代表语句结束，否则会报错
export default router
