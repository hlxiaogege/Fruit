<template>
  <div class="coupon">
    <myheader message="/mine" what="优惠券"></myheader>
    <div class="mycoupon-box">
      <van-tabs v-model="active" color="#ff9800">
        <van-tab title="未使用">
          <couponOne v-for="(item,i) in list1" :key="i" :list="item"></couponOne>
        </van-tab>
        <van-tab title="已使用">
          <couponOne v-for="(item,i) in list2" :key="i" :list="item"></couponOne>
        </van-tab>
        <van-tab title="已过期">
          <couponOne v-for="(item,i) in list3" :key="i" :list="item"></couponOne>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import myheader from "../components/myheader"
import couponOne from "../components/couponOne"
export default {
  data() {
    return {
      active:0,
      list1:[
        {estatus:1,price1:300,price2:1000,price1active:true,type:"全场通用",time:"2019-9-25 12:00:00  ",code:"565855316",timestart:"2019-9-20 19:25:12",timeend:"2019-10-20 19:25:12"},
        {estatus:1,price1:100,price2:800,price1active:true,type:"全场通用",time:"2019-8-25 15:00:00  ",code:"565855365",timestart:"2017-11-11 19:25:12",timeend:"2017-12-11 19:25:12"},
      ],
      list2:[
        {estatus:2,price1:300,price2:1000,price1active:false,type:"全场通用",time:"2019-7-25 12:00:00  ",code:"565855316",timestart:"2019-7-20 19:25:12",timeend:"2019-8-20 19:25:12"},
        {estatus:2,price1:100,price2:800,price1active:false,type:"全场通用",time:"2019-5-18 16:00:00  ",code:"565855365",timestart:"2019-5-10 19:25:12",timeend:"2019-6-10 19:25:12"},
      ],
      list3:[
        {estatus:3,price1:20,price2:100,price1active:false,type:"全场通用",time:"2019-3-15 12:00:00  ",code:"565855316",timestart:"2019-3-8 19:25:12",timeend:"2019-4-8 00:25:12"},
        {estatus:3,price1:100,price2:500,price1active:false,type:"全场通用",time:"2019-4-5 15:00:00  ",code:"565855365",timestart:"2019-4-1 19:25:12",timeend:"2019-5-1 00:25:12"},
        {estatus:3,price1:30,price2:100,price1active:false,type:"全场通用",time:"2019-4-5 15:00:00  ",code:"565855365",timestart:"2019-4-1 19:25:12",timeend:"2019-5-1 00:25:12"},
      ]
    }
  },
  components:{
    "myheader":myheader,
    "couponOne":couponOne
  }
}
</script>
<style>
.mycoupon-box{
  margin-top: 3rem;
}
.van-tab--active{
  color: #ff9800;
}
</style>