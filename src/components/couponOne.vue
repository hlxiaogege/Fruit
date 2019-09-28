<template>
  <div class="coupon-box">
    <div class="coupon-box-container">
       <div class="coupon-box-body">
        <div class="coupon-box-left">
          <span class="coupon-left-text1">{{list.estatus | useCode}}</span>
          <span :class="list.price1active?'':'tcolor-gray'" class="coupon-left-text2">￥{{list.price1}}</span>
          <span class="coupon-left-text3">满{{list.price2.toFixed(2)}}元使用</span>
        </div>
        <div class="coupon-box-right">
          <span class="coupon-right-text4">母婴跨店满{{list.price2}}减{{list.price1}}</span>
          <span class="coupon-right-text4">{{list.type}}</span>
          <span class="coupon-right-text5">
            <i>{{list.time}} 到期 </i>
            <a href="javascript:;" @click="showDetails">详情</a>
          </span>
        </div>
      </div>
      <div :class="detailsShow?'coupon-box-details-hidden':''" class="coupon-box-details ">
        <span class="coupon-details-text6">现金券号：{{list.code}}</span>
        <span class="coupon-details-text6">使用时间：{{list.timestart}}至{{list.timeend}}</span>
      </div>
    </div>
    <span class="coupon-round-up"></span>
    <span class="coupon-round-down coupon-round-active"></span>
    <span class="coupon-line"></span>
  </div>
</template>
<script>
export default {
  name:"couponOne",
  data() {
    return {
      detailsShow:true,
    }
  },
  methods: {
    showDetails(){
      this.detailsShow=!this.detailsShow;
    }
  },
  filters:{
    useCode(value){
      if(value==1){
        return "有效"
      }else if(value==2){
        return "已使用"
      }else if(value==3){
        return "已过期"
      }
    }
  },
  props:["list"]
}
</script>
<style>
.coupon-box{
  width: 100%;
  position: relative;
}
.coupon-box-container{
  width: 94%;
  margin-left: 3%;
  margin-top: 0.6rem;
  border: 1px solid #e6e6e6;
  background: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
}
.coupon-box-body{
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: space-between;
}
/* 左边 */
.coupon-box-body span{
  display: block;
}
.coupon-box-left{
  width: 33%;
  height: 100%
}
.coupon-box-left .coupon-left-text1 {
  width: 90%;
  margin-top: 10px;
  font-size: 12px;
  color: #A6A6A6;
  margin-left: 10%;
}
.coupon-box-left .coupon-left-text2{
  width: 100%;
  font-size: 24px;
  color: #FF9201;
  text-align: center;
  margin-top: 12px;
}
.tcolor-gray {
  color: #A9A9A9 !important;
}
.coupon-box-left .coupon-left-text3{
  width: 100%;
  float: left;
  font-size: 12px;
  color: #A6A6A6;
  text-align: center;
  margin-top: 15px;
}
/* 右边 */
.coupon-box-right{
  width: 63%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.coupon-box-right .coupon-right-text4 {
  font-size: 14px;
  color: #727272;
  width: 90%;
  padding: 0px 3% 0px 5%;
  line-height: 22px;
}
.coupon-box-right .coupon-right-text5 {
  font-size: 12px;
  color: #BBBBBB;
  display: flex;
  padding: 0px 3% 0px 5%;
  width: 90%;
  margin-top: 5px;
  justify-content: space-between;
}
.coupon-box-right .coupon-right-text5 a{
  color: #BBBBBB;
}
/* 圆 线 */
.coupon-round-up,.coupon-round-down {
  width: 14px;
  height: 8px;
  z-index: 2;
  position: absolute;
  border: 1px solid #E5E5E5;
  background: #F7F7F7;
}
.coupon-round-up{
  top: -1px;
  left: 33%;
  border-radius: 0 0 50% 50%/0 0 100% 100% ;
  border-top: none;
}
.coupon-line {
  width: 1px;
  height: 80px;
  border-left: 1px dashed #E3E3E3;
  position: absolute;
  left: 35.5%;
  top: 15px;
}
.coupon-round-down{
  bottom: -1px;
  left: 33%;
  border-radius: 50% 50% 0 0/100% 100% 0 0;
  border-bottom: none;
}
/* 隐藏 */
.coupon-box-details{
 width: 100%;
 height: 3.4rem;
 opacity: 1;
 transition: all .3s ease-in-out;
}
.coupon-box-details-hidden{
  opacity: 0;
  height: 0;
}
.coupon-box-details span:first-child{
  border-top: 1px dashed #E3E3E3;
}
.coupon-box-details .coupon-details-text6{
  width: 94%;
  display: block;
  font-size: 12px;
  color: #777777;
  padding: 0px 3%;
  line-height: 25px;
}
</style>