<template>
  <div>
    <myheader message="/myaddress" what="添加收货地址"></myheader>
    <div class="addadress-container">
      <div class="addadress-info">地址信息</div>
      <div class="addadress-box">
        <input placeholder="收货人姓名（请使用真实姓名）">
      </div>
      <div class="addadress-box">
        <input placeholder="手机号码">
      </div>
      <div class="addadress-box">
        <input placeholder="请选择收货地址">
      </div>
      <div class="addadress-box">
        <input placeholder="详细地址">
      </div>
      <div class="sh-adress-add">
      <router-link to="/addadress">保存</router-link>
    </div>
    </div>
  </div>
</template>
<script>
import myheader from "../components/myheader"
export default {
  components:{
    "myheader":myheader,
  }
}     
</script>
<style>
.addadress-container{
  margin-top: 3.1rem;
}
.addadress-info{
  width: 94%;
  min-height: 30px;
  line-height: 25px;
  background: #F2F0F1;
  padding: 5px 3% 0px 3%;
  font-size: 12px;
}
.addadress-box{
  width: 94%;
  height: 45px;
  line-height: 45px;
  background: #fff;
  border-bottom: 1px solid #EDEDED;
  padding: 0px 3%;
}
.addadress-box input{
  width: 100%;
  height: 45px;
  box-sizing: border-box; 
  line-height: 45px;
  font-size: 14px;
  outline: none;
  border: none;
}
</style>