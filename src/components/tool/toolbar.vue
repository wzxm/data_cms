<template>
  <div id="toolbar" class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <li>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="请输入搜索条件">
        </div>
      </li>
      <li v-for="item in list">
        <router-link :to="item.url" active-class="active">{{ item.name }}</router-link>
      </li>
      <!-- <router-link tag="li" :to="item.url" active-class="active" v-for="item in list">
        <a @click="editNavBar(item)">{{ item.name }}</a>
      </router-link> -->
    </ul>
  </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      list: [{
        id: 1, name: '系统管理', url: '/index'
      }, {
        id: 2, name: '文档管理', url: '/file'
      }, {
        id: 3, name: '会员管理', url: '/user'
      }, {
        id: 4, name: '活动推送管理', url: '/activity'
      }, {
        id: 5, name: '系统日志', url: '/log'
      }],
      data: {
      }
    }
  },
  computed: {
    ...mapGetters([
      // 获取的参数
    ])
  },
  methods: {
    ...mapActions({
      edit: 'editNavBar'
    })
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
    '$route' () {
      // console.log(this)
    }
  }
}
</script>

<style type="text/css">
  .sidebar {
    padding-top: 30px;
  }
  /*#toolbar {
    float: left;
    width: 20%;
    height: 100%;
    background-color: #30414D;
    color: #767676;
    padding: 60px 5px;
  }*/
</style>