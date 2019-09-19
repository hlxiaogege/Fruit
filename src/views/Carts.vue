<template>
  <div>
    <h1>购物车</h1>
    <tabbar ref="tab"></tabbar>
  </div>
</template>
<script>
import tabbar from "../components/tabbar"
export default {
  components:{
    'tabbar':tabbar
  },
  mounted(){
    this.$refs.tab.active=2;
  }
}
</script>
<style>
  
</style>