<template>
  <div id="activityManage">
    <form class="navbar-form navbar-left" role="search">
      <button type="button" class="btn btn-danger" @click="addList()">新增活动推送</button>
      <button type="button" class="btn btn-primary" @click="delAll()">删除活动推送</button>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="请输入搜索条件" v-model.trim="query">
      </div>
    </form>
    <br /><br /><br />
    <div class="panel panel-default">
      <div class="panel-body">
        <table class="table table-hover">
          <thead>
            <tr class="list">
              <td><input type="checkbox" v-model="allChecked"></td>
              <td>标题</td>
              <td>内容</td>
              <td>编号id</td>
              <td>更新日期</td>
              <td>操作</td>
            </tr>
          </thead>
          <tbody>
            <tr class="list" v-for="(item, index) in computedList" :key="index">
              <td><input type="checkbox" :id="item._id" :value="index" v-model="checked"></td>
              <td><input class="form-control" type="text" v-model="item.title"></td>
              <td><input class="form-control" type="text" v-model="item.content"></td>
              <td><span>{{ item._id }}</span></td>
              <td><span>{{ item.updateDate }}</span></td>
              <td>
                <button type="button" class="btn btn-primary btn-xs">配置</button>
                <button type="button" class="btn btn-primary btn-xs" @click="alertModal(item)">编辑</button>
                <button type="button" class="btn btn-primary btn-xs" @click="del(index)">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <modal :modal="modal"></modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Modal from '../modal/modal'
import $ from 'jquery'

export default {
  data () {
    return {
      query: '',
      checked: [],
      list: [],
      data: {},
      modal: {
        title: '提示',
        content: '......',
        btnClose: '取消',
        btnSave: '提交',
        show: true,
        closeShow: true
      }
    }
  },
  components: {
    Modal
  },
  computed: {
    allChecked: {
      get: function () {
        return this.checked.length === this.list.length
      },
      set: function (value) {
        if (value) {
          this.checked = this.list.map(function (item, index) {
            return index
          })
        } else {
          this.checked = []
        }
      }
    },
    computedList () {
      var vm = this
      return this.list.filter((item) => {
        return (item.title.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1) || (item.content.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1)
      })
    },
    ...mapGetters([
      // 'getNavBar'
    ])
  },
  methods: {
    ...mapActions([
      // 'editNote'
    ]),
    alertModal (item) {
      let vm = this
      if (this.delList.length > 0) {
        vm.modal.title = '编辑活动文案'
        vm.modal.content = '<label>标题: </label><input type="text" value="' + item.title + '" />'
        $('.bs-example-modal-lg').modal({
          keyboard: true
        })
      } else {
        vm.modal.content = '请选择需要编辑的列表'
        vm.modal.btnClose = '关闭'
        vm.modal.closeShow = true
        $('.bs-example-modal-sm').modal({
          keyboard: true
        })
      }
    },
    addList () {
      let vm = this
      let num = Math.ceil(Math.random() * 100000000000)
      vm.list.push({
        _id: num,
        updateDate: new Date(),
        title: '',
        content: ''
      })
    },
    delAll () {
      let vm = this
      console.log(vm.checked)
      // for (var i = 0; i < vm.checked.length; i++) {
      //   vm.list.splice(vm.checked[i], 1)
      // }
      // vm.checked = []
    },
    del (index) { // 删除单条
      let vm = this
      vm.list.splice(index, 1)
      vm.checked = []
    }
  },
  mounted () {
    let vm = this
    $.ajax({
      url: 'https://cms.ppmoney.com/json/57b02395f3aa26a91a218637.json',
      type: 'get',
      dataType: 'jsonp',
      jsonpCallback: 'fn_activityGetData_57b02395f3aa26a91a218637',
      success: function (data) {
        data.checked = false
        vm.list.push(data)
      },
      timeout: 5000,
      error: function (data) {}
    })
  },
  watch: {
  }
}
</script>

<style type="text/css">
  .table {
    margin-bottom: 0;
  }
  .list {
    /*margin: 10px 0;*/
    text-align: center;
  }
  tr>td {
    line-height: 34px !important;
  }
</style>