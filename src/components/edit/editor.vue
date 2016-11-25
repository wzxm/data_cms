<template>
  <div id="editor" class="col-sm-9 col-md-10 main">
    <h3 class="page-header">Date_CMS站点&nbsp;&nbsp;<span class="nav-bar">{{ getNavBar }}</span></h3>
    <keep-alive><router-view class="view"></router-view></keep-alive>
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
      'getNavBar'
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
  .nav-bar {
    font-size: 14px;
    color: #777;
  }
</style>