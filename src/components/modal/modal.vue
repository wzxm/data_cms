<template>
  <div id="modal">
    <!-- 编辑 -->
    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
            <h4 class="modal-title" id="myModalLabel">{{ modal.title }}</h4>
          </div>
          <div class="modal-body" v-html="modal.content">
          </div>
          <div v-show="modal.show" class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{ modal.btnClose }}</button>
            <button type="button" class="btn btn-primary">{{ modal.btnSave }}</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 编辑 -->
    <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
            <h4 class="modal-title" id="myModalLabel">{{ modal.title }}</h4>
          </div>
          <div class="modal-body">
            {{ modal.content }}
          </div>
          <div class="modal-footer">
            <button v-show="modal.closeShow" type="button" class="btn btn-default" data-dismiss="modal">{{ modal.btnClose }}</button>
            <button v-show="!modal.closeShow" type="button" class="btn btn-primary">{{ modal.btnSave }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['modal', 'title', 'content', 'btnClose', 'btnSave'],
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      // 'getNavBar'
    ])
  },
  methods: {
    ...mapActions([
      // 'editNote'
    ])
  },
  mounted () {
  }
}
</script>

<style type="text/css">
</style>