<template>
  <div>
    <myheader message="/myaddress" what="添加收货地址"></myheader>
    <div class="addadress-container">
      <div class="addadress-info">地址信息</div>
      <div class="addadress-box">
        <input v-model="uname" placeholder="收货人姓名（请使用真实姓名）">
      </div>
      <div class="addadress-box">
        <input v-model="phone" placeholder="手机号码">
      </div>
      <div class="addadress-box">
        <input v-model="place" @focus="showCityList" placeholder="请选择收货地址" readonly>
      </div>
      <div class="addadress-box">
        <input v-model="detailPlace" placeholder="详细地址">
      </div>
      <div class="addadress-box addadress-box-switch">
        <span>是否设置为默认地址</span>
        <van-switch size="20px" v-model="switchChecked" active-color="#07c160" inactive-color="#ddd"/>
      </div>
      <div class="sh-adress-add">
        <a href="javascript:;" @click="addAdress">保存</a>
      </div>
    </div>
    <van-popup position="bottom" v-model="positionShow">
      <van-area :area-list="areaList" @confirm="onConfirm" @cancel="onCancel"/>
    </van-popup>
  </div>
</template>
<script>
import myheader from "../components/myheader"
import AreaList from '../../public/js/area.js'
export default {
  data() {
    return {
      positionShow:false,
      areaList:AreaList,
      place:"",
      uname:"",
      phone:"",
      detailPlace:"",
      switchChecked:false
    }
  },
  methods: {
    addAdress(){
      if(this.uname==""){
        this.$toast.fail("收货人姓名不能为空");
        return;
      }else if(this.phone==""){
        this.$toast.fail("手机号不能为空");
        return;
      }else if(!(/^1[3456789]\d{9}$/.test(this.phone))){
        this.$toast.fail("请输入正确的手机号");
        return;
      }else if(this.place==""){
        this.$toast.fail("请选择城市");
        return;
      }else if(this.detailPlace==""){
        this.$toast.fail("请输入详细地址");
        return;
      }else{
        this.$toast.success("添加成功3秒后跳转");
        setTimeout(()=>{
          this.$router.push("/myaddress");
        },3000)
      }
    },
    showCityList(){
      this.positionShow=true;
    },
    onConfirm(val){
      this.positionShow=false;
      this.place=val[0].name+"-"+val[1].name+"-"+val[2].name;
    },
    onCancel(){
      this.positionShow=false;
    },
  },
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
.addadress-box-switch{
  display: flex;
  justify-content: space-between;
}
.addadress-box-switch>div{
  margin-top: 0.7rem;
}
.addadress-box-switch span{
  font-size: 0.85rem;
  color: #777;
}
</style>