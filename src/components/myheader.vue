<template>
  <div class="gm-header">
    <!-- 固定页头 -->
    <div class="header">
      <a @click="toWhere">
        <img src="../../public/img/arrow-left2.png" alt="">
      </a>
      <p>设置</p>
    </div>
  </div>
</template>
<script>

export default {
  name:"myheader",
  data(){
    return{
      
    }
  },
  methods: {
    toWhere(){
      this.$router.push(`${this.message}`);
    }
  },
  props:["message"]
}
</script>
<style>
.gm-header .header{
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  box-sizing: border-box;
  padding: 0.8rem 1rem;
  display: flex;
  background: #fff;
}
.gm-header .header a{
  width: 45%;
}
.gm-header .header a img{
  width: 1.2rem;
}
.gm-header .header p{
  font-size: 1rem;
}
</style>