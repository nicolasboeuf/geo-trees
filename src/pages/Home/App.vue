<template>
  <div id="app">
    <Header></Header>
    <div id="content">
      <div class="content-section">
        <div class="content-wrapper">
          <h1>GEO-TREES: high-accuracy ground data</h1>
          <h2>for satellite-derived biomass mapping</h2>
          <div class="homepage-intro">
            <span>
              Land vegetation is a large carbon store and represents opportunities to sequester additional carbon. While many Earth Observation missions aim to estimate forest carbon from space, their calibration and validation is critical. Ultimately trust in biomass maps requires accurate ground data. Supporting ground measurements and the people who make them is thus mission-critical for mapping and tracking Earth’s forest carbon. Building on decades of work from the global research community with a strong representation of partners from the Global South, the GEO-TREES initiative aims to fund high quality ground data from a global network of long-term forest inventories, and to make these data open access.
            </span>
          </div>
          <div class="homepage-intro">
            <span>The Terms of Reference of the GEO-TREES initiative are available <a href="https://geo-trees.org/terms-of-reference/" target="_blank">here</a>.</span>
          </div>
          <div class="homepage-intro">
            <span>GEO-TREES implements the recommendations of the <a href="https://lpvs.gsfc.nasa.gov/AGB/AGB_home.html" target="_blank">CEOS Aboveground Biomass Land Product Validation protocol</a>.</span>
          </div>
        </div>
      </div>
    </div>
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
@import "../../../css/commons.scss";

#app {
  #content{
    background-image: url("../../assets/homepage-background.jpg");
    background-size: cover;
    background-position: center;
    .content-section{
      .content-wrapper{
        text-align: center;
        h1{
          color: #fff;
          background-color: #213043;
          display: inline-block;
          padding: 10px 20px;
          margin-bottom: 5px;
        } 
        h2{
          color: #fff!important;
          background-color: #213043;
          display: inline-block;
          padding: 10px 20px;
          margin-bottom: 40px;
          font-size: 45px;
        }
        .homepage-intro{
          display: inline-block;
          margin-top: 10px;
          text-align: left;
          width: 100%;
          span{
            display: inline-block;
            text-align: left;
            background-color: #ffffff;
            font-size: 20px;
            color: #213043;
            font-family: "Lato-Regular";
            padding: 10px 20px;
            line-height: 45px;
            a{
              color: #53A034;
              text-decoration: none;
            }
          }
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
          .homepage-intro{
            font-size: 18px;
            span{
              line-height: 32px;
            }
          }
        }
      }
    }
  }

}

</style>
