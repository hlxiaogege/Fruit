import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num:0,
  },
  mutations: {
    setNumber(state,val){
      state.num=val;
      console.log(val);
    }
  },
  getters: {
    getNumber(state){
      return state.num;
    }
  },
  actions: {

  },
})
