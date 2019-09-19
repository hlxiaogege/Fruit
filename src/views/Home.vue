<template>
  <div>
    <h1>首页</h1>
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
    this.$refs.tab.active=0;
  }
}
</script>
<style>
  
</style>