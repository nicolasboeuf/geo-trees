<template>
  <div id="app">
    <Header></Header>
    <div id="content">
      <div class="content-section section-dark">
        <div class="content-wrapper">
          <h1>Biomass Reference Measurement Sites</h1>
          <span class="default-text">The map below provides a dynamic illustration of completed, ongoing, and planned BRM sites.<br/>We welcome suggestions and insights from the community on high-priority areas for GEO-TREES sampling</span>
        </div>
        <iframe src="https://geo-trees.org/carto/" width="100%" height="600px"></iframe>
      </div>
    </div>
  </div>
</template>

<script>

import Header from '@/components/header.vue'

export default {
  name: 'Sites',
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

#app {
  #content{
    .content-section{
      iframe{
        transform: translateY(60px);
      }
      .content-wrapper{
        
      }
    }
  }
}

@media (max-width: 1023px) {

  #app {
    #content{
      .content-section{
        .content-wrapper{
    
        }
      }
    }
  }
}

@media (max-width: 767px) {

  #app {
    #content{
      .content-section{
        .content-wrapper{
        
        }
      }
    }
  }
}

</style>
