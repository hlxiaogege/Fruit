import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Home from './views/Home'
import Carts from './views/Carts'
import Classify from './views/Classify'
import Mine from './views/Mine'
import Search from './views/Search'
import Mine_setting from './views/Mine_setting'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Index},
    {path: '/index',component: Index},
    {path: '/home',component: Home},
    {path: '/carts',component: Carts},
    {path: '/classify',component: Classify},
    {path: '/mine',name:'mine',component: Mine},
    {path: '/search',component: Search},
    {path: '/mine-setting',name:'mine-setting',component: Mine_setting},
    
  ]
})
