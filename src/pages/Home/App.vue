<template>
  <div id="app">
    <Header></Header>
    <h1>Homepage</h1>
  </div>
</template>

<script>

import Header from '@/components/header.vue'

import Vue from 'vue'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)
/* import store from '@/store' */

export default {
  name: 'App',
  metaInfo: {
    title: 'Mon site - Accueil',
    meta: [
      {
        name: 'description',
        content: 'Boilerplate site multipages avec vue'
      },
      {
        name: 'keywords',
        content: 'Boilerplate'
      },
      {
        name: 'robots',
        content: 'index, follow'
      },
      {
        name: 'language',
        content: 'French'
      },
    ],
    link: [
      {
        rel:'icon',
        href:''
      }
    ]
  },
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
