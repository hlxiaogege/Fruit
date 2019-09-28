<template>
  <div class="Myorder">
    <myheader message="/mine" what="我的订单"></myheader>
    <div class="myorder-tab">
      <van-tabs v-model="tabactive" :swipe-threshold="5" color="#ff9800">
        <van-tab title="全部">
          <a class="zjzz-buylist-allact classfix" href="javascript:;">
						双十一期间发货时效公告>>
					</a>
          <div class="zjzz-buylist-goods1">
            <div class="zjzz-buylist-gtime classfix">
              <span class="zjzz-buylist-gtime1">2017-11-11</span>
              <div class="zjzz-buylist-gtime2">已发货</div>
            </div>
            <div class="zjzz-buylist-det classfix">
              <a href="javascript:;">
                <img src="../../public/img/myorder-img1.png" alt="">
              </a>
              <div class="zjzz-buylist-gdetail">
                <span class="zjzz-buylist-gtit1">Dr.Ci:Labo 城野医生 卓效收敛化妆水 限量版 200毫升</span>
              </div>
              <span class="zjzz-buylist-gmoney">
                <i class="zjzz-buylist-gm1">￥179.00</i>
                <i class="zjzz-buylist-gm2">x1</i>
              </span>

            </div>
            <span class="zjzz-buylist-goodsm">
              <span class="zjzz-buylist-gm3">共1件</span>
              <i>应付总额：
                <i class="zjzz-buylist-gm4">
                  ￥179.00
                </i>
              </i>
            </span>
            <div class="zjzz-buylist-btn">
              <a href="javascript:;" class="zjzz-buylist-btn3">确认收货</a>
              <a href="javascript:;" class="zjzz-buylist-btn1">查看物流</a>
              <a href="javascript:;" class="zjzz-buylist-btn1">催物流</a>
            </div>
          </div>
          <div class="zjzz-buylist-goods1">
            <div class="zjzz-buylist-gtime classfix">
              <span class="zjzz-buylist-gtime1">2017-11-11</span>
              <div class="zjzz-buylist-gtime2">交易成功</div>
            </div>
            <div class="zjzz-buylist-det classfix">
              <a href="javascript:;">
                <img src="../../public/img/myorder-img1.png" alt="">
              </a>
              <div class="zjzz-buylist-gdetail">
                <span class="zjzz-buylist-gtit1">Dr.Ci:Labo 城野医生 卓效收敛化妆水 限量版 200毫升</span>
              </div>
              <span class="zjzz-buylist-gmoney">
                <i class="zjzz-buylist-gm1">￥179.00</i>
                <i class="zjzz-buylist-gm2">x1</i>
              </span>
            </div>
            <div class="zjzz-buylist-det classfix">
              <a href="javascript:;">
                <img src="../../public/img/myorder-img1.png" alt="">
              </a>
              <div class="zjzz-buylist-gdetail">
                <span class="zjzz-buylist-gtit1">Dr.Ci:Labo 城野医生 卓效收敛化妆水 限量版 200毫升</span>
              </div>
              <span class="zjzz-buylist-gmoney">
                <i class="zjzz-buylist-gm1">￥179.00</i>
                <i class="zjzz-buylist-gm2">x1</i>
              </span>
            </div>
            <div class="zjzz-buylist-det classfix">
              <a href="javascript:;">
                <img src="../../public/img/myorder-img1.png" alt="">
              </a>
              <div class="zjzz-buylist-gdetail">
                <span class="zjzz-buylist-gtit1">Dr.Ci:Labo 城野医生 卓效收敛化妆水 限量版 200毫升</span>
              </div>
              <span class="zjzz-buylist-gmoney">
                <i class="zjzz-buylist-gm1">￥179.00</i>
                <i class="zjzz-buylist-gm2">x1</i>
              </span>
            </div>
            <span class="zjzz-buylist-goodsm">
              <span class="zjzz-buylist-gm3">共1件</span>
              <i>应付总额：
                <i class="zjzz-buylist-gm4">
                  ￥537.00
                </i>
              </i>
            </span>
            <div class="zjzz-buylist-btn">
              <a href="javascript:;" class="zjzz-buylist-btn3">评价</a>
              <a href="javascript:;" class="zjzz-buylist-btn1">查看物流</a>
              <a href="javascript:;" class="zjzz-buylist-btn1">删除订单</a>
            </div>
            
          </div>
        </van-tab>
        <van-tab title="待付款">
          <a class="zjzz-buylist-allact classfix" href="javascript:;">
						双十一期间发货时效公告>>
					</a>
          <div class="zjzz-buylist-goods1">
            <div class="zjzz-buylist-gtime classfix">
              <span class="zjzz-buylist-gtime1">2017-11-11</span>
              <div class="zjzz-buylist-gtime2">已发货</div>
            </div>
            <div class="zjzz-buylist-det classfix">
              <a href="javascript:;">
                <img src="../../public/img/myorder-img1.png" alt="">
              </a>
              <div class="zjzz-buylist-gdetail">
                <span class="zjzz-buylist-gtit1">Dr.Ci:Labo 城野医生 卓效收敛化妆水 限量版 200毫升</span>
              </div>
              <span class="zjzz-buylist-gmoney">
                <i class="zjzz-buylist-gm1">￥179.00</i>
                <i class="zjzz-buylist-gm2">x1</i>
              </span>

            </div>
            <span class="zjzz-buylist-goodsm">
              <span class="zjzz-buylist-gm3">共1件</span>
              <i>应付总额：
                <i class="zjzz-buylist-gm4">
                  ￥179.00
                </i>
              </i>
            </span>
            <div class="zjzz-buylist-btn">
              <a href="javascript:;" class="zjzz-buylist-btn3">去付款</a>
            </div>
          </div>
        </van-tab>
        <van-tab title="待发货">
          <a class="zjzz-buylist-allact classfix" href="javascript:;">
						双十一期间发货时效公告>>
					</a>
          <div class="zjzz-buylist-goods1">
            <div class="zjzz-buylist-gtime classfix">
              <span class="zjzz-buylist-gtime1">2017-11-11</span>
              <div class="zjzz-buylist-gtime2">已发货</div>
            </div>
            <div class="zjzz-buylist-det classfix">
              <a href="javascript:;">
                <img src="../../public/img/myorder-img1.png" alt="">
              </a>
              <div class="zjzz-buylist-gdetail">
                <span class="zjzz-buylist-gtit1">Dr.Ci:Labo 城野医生 卓效收敛化妆水 限量版 200毫升</span>
              </div>
              <span class="zjzz-buylist-gmoney">
                <i class="zjzz-buylist-gm1">￥179.00</i>
                <i class="zjzz-buylist-gm2">x1</i>
              </span>

            </div>
            <span class="zjzz-buylist-goodsm">
              <span class="zjzz-buylist-gm3">共1件</span>
              <i>应付总额：
                <i class="zjzz-buylist-gm4">
                  ￥179.00
                </i>
              </i>
            </span>
            <div class="zjzz-buylist-btn">
              <a href="javascript:;" class="zjzz-buylist-btn3">催发货</a>
              <a href="javascript:;" class="zjzz-buylist-btn1">查看物流</a>
              <a href="javascript:;" class="zjzz-buylist-btn1">退款</a>
            </div>
          </div>
        </van-tab>
        <van-tab title="待收货">
          <a class="zjzz-buylist-allact classfix" href="javascript:;">
						双十一期间发货时效公告>>
					</a>
          <div class="zjzz-buylist-goods1">
            <div class="zjzz-buylist-gtime classfix">
              <span class="zjzz-buylist-gtime1">2017-11-11</span>
              <div class="zjzz-buylist-gtime2">已发货</div>
            </div>
            <div class="zjzz-buylist-det classfix">
              <a href="javascript:;">
                <img src="../../public/img/myorder-img1.png" alt="">
              </a>
              <div class="zjzz-buylist-gdetail">
                <span class="zjzz-buylist-gtit1">Dr.Ci:Labo 城野医生 卓效收敛化妆水 限量版 200毫升</span>
              </div>
              <span class="zjzz-buylist-gmoney">
                <i class="zjzz-buylist-gm1">￥179.00</i>
                <i class="zjzz-buylist-gm2">x1</i>
              </span>

            </div>
            <span class="zjzz-buylist-goodsm">
              <span class="zjzz-buylist-gm3">共1件</span>
              <i>应付总额：
                <i class="zjzz-buylist-gm4">
                  ￥179.00
                </i>
              </i>
            </span>
            <div class="zjzz-buylist-btn">
              <a href="javascript:;" class="zjzz-buylist-btn3">确认收货</a>
              <a href="javascript:;" class="zjzz-buylist-btn1">查看物流</a>
            </div>
          </div>
        </van-tab>
        <van-tab title="评价">
          <ul class="myorder-commit">
            <li class="myorder-commit-item" @click="chooseCommitItem(0)">
              <a :class="commitItemActive==0?'commit-item-active':''" href="javascript:;">待评价(4)</a>
            </li>
            <li class="myorder-commit-item" @click="chooseCommitItem(1)">
              <a :class="commitItemActive==1?'commit-item-active':''"  href="javascript:;">已评价</a>
            </li>
          </ul>
          <div class="commit-award">
            <span>已累计奖励0豆</span>
          </div>
          <div :class="commitItemActive==0?'commit-box1-active':''" class="commit-box1">
            <div class="commit-item-box" v-for="(item,index) in commitList1" :key="index">
              <div class="commit-item-up">
                <a class="commit-item-img" href="javascript:;">
                  <img :src="item.img" alt="">
                </a>
                <div class="commit-item-title">
                  <span class="commit-item-title1">{{item.title}}</span>
                  <span class="commit-item-title2">评价送{{item.count}}考拉豆</span>
                </div>
              </div>
              <div class="commit-item-down">
                <a href="javascript:;">查看订单</a>
                <a href="javascript:;">评论送豆</a>
              </div>
            </div>
          </div>
          <div :class="commitItemActive==1?'commit-box1-active':''" class="commit-box1">
            <div class="commit-item-box" v-for="(item,index) in commitList2" :key="index">
              <div class="commit-item-up">
                <a class="commit-item-img" href="javascript:;">
                  <img :src="item.img" alt="">
                </a>
                <div class="commit-item-title">
                  <span class="commit-item-title1">{{item.title}}</span>
                  <span class="commit-item-title2">评价送{{item.count}}考拉豆</span>
                </div>
              </div>
              <div class="commit-item-down">
                <a href="javascript:;">追加评论</a>
                <a href="javascript:;">查看订单</a>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import myheader from "../components/myheader"
export default {
  data(){
    return{
      tabactive:0,
      commitItemActive:0,
      commitList1:[
        {img:require("../../public/img/myorder-img1.png"),title:"Dr.Ci:Labo 城野医生 卓效收敛化妆水 限量版 200毫升",count:10},
        {img:require("../../public/img/myorder-img1.png"),title:"Dr.Ci:Labo 城野医生 卓效收敛化妆水 限量版 200毫升",count:10},
        {img:require("../../public/img/myorder-img1.png"),title:"Dr.Ci:Labo 城野医生 卓效收敛化妆水 限量版 200毫升",count:10},
        {img:require("../../public/img/myorder-img1.png"),title:"Dr.Ci:Labo 城野医生 卓效收敛化妆水 限量版 200毫升",count:10},
        {img:require("../../public/img/myorder-img1.png"),title:"Dr.Ci:Labo 城野医生 卓效收敛化妆水 限量版 200毫升",count:10},
      ],
      commitList2:[
        {img:require("../../public/img/vegetable-img1.png"),title:"Dr.Ci:Labo 城野医生 卓效收敛化妆水 限量版 200毫升",count:20},
      ]
    }
  },
  methods: {
    chooseCommitItem(i){
      this.commitItemActive=i;
    }
  },
  mounted(){
    this.tabactive=this.$store.getters.getNumber;
    console.log(this.tabactive);
  },
   components:{
    "myheader":myheader,
  }
}
</script>
<style>
.Myorder{

}
.myorder-tab{
  padding-top: 3rem;
  background: #F7F7F7;
}

/* 全部 */
.zjzz-buylist-allact{
  float: left;
  width: 90%;
  padding-left: 10%;
  line-height: 40px;
  font-size: 14px;
  margin-top: 10px;
  background: #FFFFFF;
  background-size: 5%;
}
.zjzz-buylist-goods1 {
  float: left;
  width: 94%;
  margin-top: 10px;
  padding: 5px 3% 0 3%;
  background: #FFFFFF;
  border-bottom: 1px solid #F6F6F6;
}
.zjzz-buylist-gtime {
  width: 100%;
  font-size: 14px;
  line-height: 35px;
  border-bottom: 1px solid #D4D4D4;
  justify-content: space-between;
}
.zjzz-buylist-gtime1 {
  float: left;
}
.zjzz-buylist-gtime2 {
  float: right;
  color: #787878;
}
.zjzz-buylist-det{
  width: 100%;
  padding: 0.7rem 0;
  border-bottom: 1px solid #f3f3f3;
  display: flex;
  justify-content: space-between;
}
.zjzz-buylist-det img{
  width: 75px;
  height: 75px;
}
.zjzz-buylist-gdetail{
  width: 55%;
  margin-top: 0.7rem;
  font-size: 0.9rem;
}
.zjzz-buylist-gmoney{
  width: 20%;
  text-align: right;
}
.zjzz-buylist-gmoney i{
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #B1B1B1;
}
.zjzz-buylist-gmoney i:first-child{
  margin-top: 0.7rem;
  font-size: 0.85rem;
  color:#333;
}
.zjzz-buylist-goodsm {
  float: left;
  width: 100%;
  text-align: right;
  line-height: 45px;
  font-size: 14px;
}
.zjzz-buylist-gm3 {
  margin: 0 10px;
}
.zjzz-buylist-gm4 {
  color: #FF9201;
}
.zjzz-buylist-btn {
  float: left;
  width: 100%;
  margin-bottom: 10px;
}
.zjzz-buylist-btn a {
  float: right;
  width: 85px;
  font-size: 14px;
  text-align: center;
  line-height: 25px;
  border-radius: 3px;
}
.zjzz-buylist-btn3 {
  color: #FFFFFF;
  background: #FF9201;
  border: 1px solid #FF9201;
}
.zjzz-buylist-btn1 {
  color: #393939;
  margin-right: 15px;
  border: 1px solid #CDCDCD;
}

/* 评价 */
.myorder-commit{
  display: flex;
  width: 100%;
}
.myorder-commit-item{
  width: 50%;
  text-align: center;
  background-color: #FFFFFF;
}
.myorder-commit-item a{
  display: inline-block;
  font-size: 0.8rem;
  width: 40%;
  height: 2rem;
  line-height: 2rem;
}
.commit-item-active{
  border-bottom:2px solid #000;
}
.commit-award{
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  background: #F8F3F7;
  color: #BCB7BB;
}
.commit-box1{
  display: none;
}
.commit-box1-active{
  display: block;
}
.commit-item-box{
  width: 94%;
  padding: 0.4rem 3% 0 3%;
  background: #FFFFFF;
  border-bottom: 1px solid #F6F6F6;
}
.commit-item-up{
  display: flex;
}
.commit-item-img img{
  width: 4.7rem;
  height: 4.7rem
}
.commit-item-title span{
  display: block;
  font-size: 0.85rem;
  padding-left: 0.5rem;
  margin-top: 0.5rem;
}
.commit-item-title span:last-child{
  line-height: 35px;
  color: #AFAFAF;
  margin-top: 0;
}
.commit-item-down{
  display: flex;
  margin-bottom: 0.7rem;
  justify-content: flex-end;
}
.commit-item-down a{
  display: inline-block;
  padding: 0.2rem 0.5rem;
  border:1px solid #cdcdcd;
  border-radius:0.2rem; 
}
.commit-item-down a:last-child{
  margin-left: 0.7rem;
  color: #dd9201;
  border: 1px solid #ff9201;
}
</style>