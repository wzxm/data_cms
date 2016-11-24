<template>
  <div id="systemLog" class="panel panel-default">
    <div class="panel-body">
       系统日志
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