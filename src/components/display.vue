<template>
  <div>
    <h4>Count is {{ getCount }}</h4>
    <br>
    <input type="text" name="" :value="getCount" @input="updateMessage">
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  
  export default {
    data () {
      return {
        data: {
          username: '',
          age: 0
        }
      }
    },
    computed: {
      ...mapState({
        age: 'count'
      }),
      ...mapGetters([
        'getCount'
      ])
    },
    methods: {
      ...mapActions([
        'updateMessage'
      ])
    }
  }
</script>