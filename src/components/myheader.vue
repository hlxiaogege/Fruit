<template>
  <div class="gm-header">
    <!-- 固定页头 -->
    <div class="header">
      <a @click="toWhere">
        <img src="../../public/img/arrow-left2.png" alt="">
      </a>
      <p>{{what}}</p>
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
  props:["message","what"]
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
  background: #fff;
  text-align: center;
}
.gm-header .header a{
  float: left;
}
.gm-header .header a img{
  width: 1.2rem;
}
.gm-header .header p{
  font-size: 1rem;
}
</style>