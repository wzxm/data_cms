<template>
  <div id="toolbar" class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <li>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="请输入搜索条件" v-model.trim="query">
        </div>
      </li>
      <li v-for="(item, index) in computedList" :key="item.id">
        <!-- <router-link :to="item.url" active-class="active">{{ item.name }}</router-link> -->
        <a href="javascript:;" @click="cut(item)">{{ item.name }}</a>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  // init 组件实例刚被创建，组件属性计算之前，如 data 等
  beforeCreate () {
    console.log('toolbar init success')
  },
  data () {
    return {
      query: '',
      list: [{
        id: 1, name: '系统管理', engname: 'xitongguanli', url: '/index'
      }, {
        id: 2, name: '文档管理', engname: 'wendangguanli', url: '/file'
      }, {
        id: 3, name: '会员管理', engname: 'huiyuanguanli', url: '/user'
      }, {
        id: 4, name: '活动推送管理', engname: 'huodongtuisongguanli', url: '/activity'
      }, {
        id: 5, name: '系统日志', engname: 'xitongrizhi', url: '/log'
      }],
      data: {
      }
    }
  },
  computed: {
    computedList () {
      var vm = this
      return this.list.filter((item) => {
        return (item.name.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1) || (item.engname.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1)
      })
    },
    ...mapState({
    }),
    ...mapGetters([
      // 获取的参数
    ])
  },
  methods: {
    cut (item) {
      this.$store.dispatch('editNavBar', item).then((m) => {
        this.$router.push(m.url)
      })
    }
    // ...mapActions({
    //   editNavBar: 'editNavBar'
    // })
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    // this.fetchData()
  },
  /**
   * [watch 增加路由监听，可以获得来源和去向页面]
   * @type {Object}
   */
  watch: {
    msg () {
      console.log(this.msg)
    },
    '$route' (to, from) {
      // console.log(this.$router)
    }
  }
}
</script>

<style type="text/css">
  .sidebar {
    padding-top: 30px;
  }
</style>