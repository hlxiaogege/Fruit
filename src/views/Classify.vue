<template>
  <div>
    <h1>分类</h1>
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
    this.$refs.tab.active=1;
  }
}
</script>
<style>
  
</style>