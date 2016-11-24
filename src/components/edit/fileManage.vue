<template>
  <div id="fileManage" class="panel panel-default">
    <div class="panel-body">
      文档管理
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      data: {
      }
    }
  },
  computed: {
    ...mapGetters([
      // 'getNavBar'
    ]),
    text () {
      return this.activeNoteText
    }
  },
  methods: {
    ...mapActions([
      // 'editNote'
    ])
  }
}
</script>

<style type="text/css">
  
</style>