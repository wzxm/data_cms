<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite"
      class="glyphicon glyphicon-star"
      :class="{starred: activeNote.favorite}"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
    <i @click="gotoMain" class="glyphicon glyphicon-arrow-right"></i>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    activeNote: 'activeNote'
  }),
  methods: {
    ...mapActions([
      'addNote',
      'deleteNote',
      'toggleFavorite'
    ]),
    gotoMain: function () {
      window.location.href = 'user.html'
    }
  }
}
</script>