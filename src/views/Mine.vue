<template>
  <div>
    <h1>我的</h1>
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
    this.$refs.tab.active=3;
  }
}
</script>
<style>
  
</style>