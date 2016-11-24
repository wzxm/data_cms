<template>
  <div id="editContent" class="panel panel-default">
    <div class="panel-body">
      Panel content
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