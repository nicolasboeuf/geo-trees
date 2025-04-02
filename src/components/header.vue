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
      return window.location.origin
    }
  },
  methods: {
  },

  watch:{
  },

  created(){
    console.log(window.location)
  }

}
</script>


<style scoped lang="scss">
  
</style>