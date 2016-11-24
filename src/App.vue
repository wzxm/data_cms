<template>
  <div id="app" class="">
    <headerbar></headerbar>
    <div class="container-fluid">
      <div class="row">
        <toolbar></toolbar>
        <editor></editor>
      </div>
    </div>
  </div>
</template>

<script>
import Headerbar from './components/header/headerbar'
import Toolbar from './components/tool/toolbar'
import Editor from './components/edit/editor'

export default {
  data () {
    return {
    }
  },
  components: {
    Headerbar, Toolbar, Editor
  }
}
</script>

<style type="text/css">
  body {
    padding-top: 50px;
  }
  #app {

  }
</style>