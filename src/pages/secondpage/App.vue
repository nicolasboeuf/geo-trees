<template>
  <div id="app">
    <Header></Header>
    <div id="content">
      <h1>Seconde page</h1>
    </div>
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
