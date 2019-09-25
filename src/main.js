import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// vant
import Vant from 'vant';
import 'vant/lib/index.css';

import Vuex from 'vuex'
Vue.use(Vuex);
var store=new Vuex.Store({
  state:{  //集中管理数据属性
    age:20,
    list:[1,2,3,4,5],
    car:"七手QQ",
  },
  mutations:{ //集中修改数据函数
    updateCar(state){
      state.car = ["卡罗拉","雷凌","思域","凌派","轩逸","朗逸","速腾","英朗","科沃兹","帝豪"][parseInt(Math.random()*10)];
    },
    updateAge(state,age){
      state.age = age;
    },
    clear(state){ //添加清除年龄的方法
      state.age=0;
    }
  },
  actions:{  // 集中保存异步修改函数
    modifyAge:(context)=>{
      setTimeout(()=>{
        // 异步调用mutations中定义的函数
        context.commit("clear");
      },500)
    }
  },
  getters:{  //集中获取数据函数
    getAge(state){  //特殊:所有函数都有参数
      return state.age;
    },
    getList(state){
      return state.list;
    },
    getCar(state){
      return state.car;
    }
  },
})

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
