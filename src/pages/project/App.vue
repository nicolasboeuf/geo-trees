<template>
  <div id="app">
    <Header></Header>
    <div id="content">
      <div class="content-section section-dark">
        <div class="content-wrapper">
          <h1>GEO-TREES: a network of Biomass Reference Measurement sites</h1>
          <h2>What are Biomass Reference Measurement (BRM) sites ?</h2>
        </div>
      </div>
      <div class="content-section section-light">
        <div class="content-wrapper">
          <h2>What are the measurement requirements to obtain this high quality data?</h2>
        </div>
      </div>
      <div class="content-section section-white">
        <div class="content-wrapper">
          <h2>Forest plot inventory</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Header from '@/components/header.vue'

export default {
  name: 'Project',
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

#app{
  #content{
    .content-section{
      padding: 20px 0 50px 0;
      &.section-dark{
        background-color: #213043;
        .content-wrapper{
          h1{
            color:#53A034;
            margin-bottom: 50px;
          }
          h2{
            color: #fff;
            text-align: left;
            font-size: 36px;
          }
        }
      }
      &.section-light{
        background-color: #f4f7e4;
        .content-wrapper{
          h2{
            color: #213043;
            text-align: left;
            font-size: 36px;
          }
        }
      }
      &.section-white{
        background-color: #fff;
        .content-wrapper{
          h2{
            color: #213043;
            text-align: left;
            font-size: 36px;
          }
        }
      }
    }
  }
}

</style>
