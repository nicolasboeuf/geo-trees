<template>
  <div id="header">
    <a :href="currentPath + '/'">Home</a>
    <a :href="currentPath + '/secondpage.html'">seconde page</a>

    {{ currentPath }}
  </div>
</template>

<script>
//import store from '@/store'

export default {
  name: 'Header',
  data(){
    return {
    }
  },
  props: {
  },
  computed: {
    currentPath(){
      return window.location.href.substring(0, window.location.href.lastIndexOf('/'))
    }
  },
  methods: {
  },

  watch:{
  },

  created(){
    console.log(window.location)
    console.log(window.location.href.substring(0, window.location.href.lastIndexOf('/')))
  }

}
</script>


<style scoped lang="scss">
  
</style>