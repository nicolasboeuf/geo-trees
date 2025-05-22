import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aboutData:undefined,
    endImport:false
  },
  mutations: {
    initializeAboutData (state,data) {
      state.aboutData = data
    },
    endImport(state,value){
      state.endImport = value
    }
  }
})
