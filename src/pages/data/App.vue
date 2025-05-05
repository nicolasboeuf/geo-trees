<template>
  <div id="app">
    <Header></Header>
    <div id="content">

      <div class="content-section section-dark">
        <div class="content-wrapper">
          <h1>Forest Plot Biomass data</h1>
          <h2>Data portal</h2>
          <span class="default-text">DATA.GEO-TREES is the data portal of the GEO-TREES initiative. Access data here : <a href="https://data.geo-trees.org/" target="_blank">data.geo-trees.org</a></span>
        </div>
      </div>

      <div class="content-section section-light">
        <div class="content-wrapper">
          <h2>Data Sharing</h2>
          <span class="default-text">The biomass data collected by the GEO-TREES project will be made publicly accessible through the GEO-TREES web portal.</span><br/>
          <span class="default-text">To deliver these high-quality data over a sustained period in dozens of countries requires skilled teams hosted by institutional partners. The labor and skill demanded for the groundwork are high, and conditions of work are often insecure and difficult. It follows that for in situ data to be shared openly GEO-TREES partners will be fairly and systematically funded with adequate provision of training and career development.</span><br/>
          <span class="default-text">The intellectual property of the primary stem and species data remain with the principal investigators of each site.</span>
        </div>
      </div>

        

    </div>
  </div>
</template>

<script>

import Header from '@/components/header.vue'

export default {
  name: 'Data',
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
    background-color: #f4f7e4;
    .content-section{
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
