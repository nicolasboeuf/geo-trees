<template>
  <div id="app">
    <Header></Header>
    <h1>Seconde page</h1>
    <span>coucou</span>
  </div>
</template>

<script>

import Header from '@/components/header.vue'

import Vue from 'vue'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)

export default {
  name: 'Seconde page',
  metaInfo: {
    title: 'Mon site - seconde page',
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
@import "../../../css/commons.scss";

</style>
