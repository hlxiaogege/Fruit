<template>
  <div>
    <van-tabbar v-model="active" active-color="#ff9800" style="z-index:10">
      <van-tabbar-item v-for="(item,index) in tabbars" :key="index" :to="item.name">
        <span>{{item.title}}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "tabbar",
  data() {
    return {
      active: 0,
      currIndex: 0,
      tabbars: [
        {
          name: "index", //跳转的路由
          title: "首页",  //底部栏文字
          normal:require('../../public/img/01.png'),
          active:require('../../public/img/01a.png')
        },
        {
          name: "classify",
          title: "分类",
          normal:require('../../public/img/02.png'),
          active:require('../../public/img/02a.png')
        },
        {
          name: "carts",
          title: "购物车",
          normal:require('../../public/img/03.png'),
          active:require('../../public/img/03a.png')
        },
         {
          name: "mine",
          title: "我的",
          normal:require('../../public/img/04.png'),
          active:require('../../public/img/04a.png')
        }
      ]
    }
  },
}
</script>
<style>
  
</style>