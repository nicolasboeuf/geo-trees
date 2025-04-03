<template>
  <div id="header">
    <div id="header-logo"><img src="icon.png" alt="GEO-TREES"/></div>
    <div id="header-links">
      <a :href="dynamicPath + '/'">HOME</a>
      <a :href="dynamicPath + '/about_us.html'">ABOUT US</a>
      <a :href="dynamicPath + '/project.html'">PROJECT</a>
      <a :href="dynamicPath + '/data.html'">DATA</a>
      <a :href="dynamicPath + '/contact.html'">CONTACT</a>
      <a :href="dynamicPath + '/terms-of-reference.html'">Terms of Reference</a>
    </div>
  </div>
</template>

<script>
//import store from '@/store'

export default {
  name: 'Header',
  data(){
    return {
    }
  },
  props: {
  },
  computed: {
    dynamicPath(){
      return window.location.href.substring(0, window.location.href.lastIndexOf('/'))
    }
  },
  methods: {
  },

  watch:{
  },

  created(){
  }

}
</script>


<style scoped lang="scss">

#header{
  background-color: #fff;
  height: 66px;
  position: relative;
  #header-logo{
    width: 100px;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 20px;
    height: 60px;
    img{
      width: auto;
      height: 100%;
    }
  }
  #header-links{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    a{
      margin: 0 10px;
      font-family: "Lato-Bold";
      font-size: 20px;
      text-decoration: none;
      color:#213043;
    }
  }
}
  
</style>