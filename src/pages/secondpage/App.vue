<template>
  <div id="app">
    <Header></Header>
    <h1>Seconde page</h1>
    <span>coucou</span>
  </div>
</template>

<script>

import Header from '@/components/header.vue'

export default {
  name: 'Secondepage',
  components: {
    Header
  },
  computed: {
  
  },

  watch:{
  
  },
  
  created(){
  
  }
}
</script>

<style lang="scss">

@import "../../../css/overload-fonts.css";
@import "../../../css/commons.scss";

</style>
