<template>
  <div id="note-editor">
    <textarea
      :value="text"
      @input="editNote"
      class="form-control">
    </textarea>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'activeNoteText'
    ]),
    text () {
      return this.activeNoteText
    }
  },
  methods: {
    ...mapActions([
      'editNote'
    ])
  }
}
</script>