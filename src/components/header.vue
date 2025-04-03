<template>
  <div id="header">
    <div id="header-logo"><img src="icon.png" alt="GEO-TREES"/></div>
    <div id="header-links">
      <a :class="pathName === '' ? 'active' : ''" :href="dynamicPath + '/'">HOME</a>
      <a :class="pathName === 'about_us.html' ? 'active' : ''" :href="dynamicPath + '/about_us.html'">ABOUT US</a>
      <a :class="pathName === 'project.html' ? 'active' : ''" :href="dynamicPath + '/project.html'">PROJECT</a>
      <a :class="pathName === 'data.html' ? 'active' : ''" :href="dynamicPath + '/data.html'">DATA</a>
      <a :class="pathName === 'contact.html' ? 'active' : ''" :href="dynamicPath + '/contact.html'">CONTACT</a>
      <a :class="pathName === 'terms-of-reference.html' ? 'active' : ''" :href="dynamicPath + '/terms-of-reference.html'">Terms of Reference</a>
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
    },
    pathName(){
      return window.location.href.split('/').pop()
    }
  },
  methods: {
  },

  watch:{
  },

  created(){
    console.log(this.pathName)
    console.log(this.dynamicPath)
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
      margin: 0 15px;
      font-family: "Lato-Bold";
      font-size: 20px;
      text-decoration: none;
      color:#213043;
      position: relative;
      &:after{
        content: '';
        display: block;
        width: 2px;
        height: 20px;
        background-color: #213043;
        position: absolute;
        top:2px;
        right: -15px;
      }
      &:last-child{
        &:after{
          display: none;
        }
      }
      &:before{
          content: '';
          display: block;
          width: 100%;
          height: 2px;
          background-color: #53A034;
          position: absolute;
          bottom: -5px;
          left: 0;
          opacity: 0;
        }
      &:hover{
        &:before{
          opacity: 1;
        }
      }
      &.active{
        &:before{
          opacity: 1;
        }
      }
    }
  }
}
  
</style>