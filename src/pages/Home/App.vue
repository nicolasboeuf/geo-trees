<template>
  <div id="app">
    <Header></Header>
    <h1>GEO-TREES: high-accuracy ground data for satellite-derived biomass mapping.</h1>
    <img src="icon.png" alt="GEO-TREES" />
  </div>
</template>

<script>

import Header from '@/components/header.vue'
/* import store from '@/store' */

export default {
  name: 'Homepage',
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

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>

<!-- 

<meta property="og:title" content="Mon site - Accueil"><meta property="og:image" content=""><meta property="og:description" content="Boilerplate site multipages avec vue"><title>Mon site - Accueil</title>

-->
