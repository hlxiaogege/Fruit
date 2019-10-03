import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// axios
import axios from "axios"
axios.defaults.withCredentials=true;
axios.defaults.baseURL="http://127.0.0.1:5050/"
Vue.prototype.axios=axios;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
