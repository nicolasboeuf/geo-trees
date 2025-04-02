<template>
  <div id="header">
    <a :href="dynamicPath + '/'">Home</a>
    <a :href="dynamicPath + '/secondpage.html'">seconde page</a>
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
    dynamicPath(){
      return window.location.href.substring(0, window.location.href.lastIndexOf('/'))
    }
  },
  methods: {
  },

  watch:{
  },

  created(){
  }

}
</script>


<style scoped lang="scss">

#header{
  background-color: #fff;
  height: 66px;
}
  
</style>