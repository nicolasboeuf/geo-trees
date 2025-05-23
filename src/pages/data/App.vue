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
          <span class="default-text">The following data collected by the GEO-TREES project is publicly accessible through the GEO-TREES web portal:
            <ul>
              <li>0.25 ha aboveground biomass estimates and uncertainty for each tree inventory subplot;</li>
              <li>1-m canopy height estimates and uncertainty for each ALS-surveyed site;</li>
              <li>0.25 ha aboveground biomass estimates and uncertainty inferred from ALS and tree inventory over the landscape.</li>
            </ul>
            <br/>
            The data sharing agreement should be consulted before downloading the data on the GEO-TREES web portal. </span><br/>
          <span class="default-text">To deliver these high-quality data over a sustained period in dozens of countries requires skilled teams hosted by institutional partners. The labor and skill demanded for the groundwork are high, and conditions of work are often insecure and difficult.</span>
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
