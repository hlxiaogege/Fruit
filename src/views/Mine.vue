<template>
  <div class="mine">
    <!-- 固定页头 -->
    <div class="mine-header">
      <p>个人中心</p>
      <router-link to="/mine-setting">管理</router-link>
    </div>
    <!-- 主体内容 -->
    <div class="mine-body">
      <div class="mine-pic-container">
        <img src="../../public/img/mine-bg1.jpg">
        <div class="mine-personal-box">
          <div class="mine-personal-img">
            <img src="../../public/img/timg1.jpg">
          </div>
          <div class="mine-personal-info">
            <span class="mine-personal-text1">青春微凉伴离殇</span>
          </div>
        </div>
      </div>
      <div class="order-container">
        <div class="myorder">
          <p>我的订单</p>
          <a href="javascript:;">
            <span>查看全部订单</span>
            <img src="../../public/img/arrow-right.png" alt="">
          </a>
        </div>
        <div class="other-order classfix">
          <a href="javascript:;" class="order-list order1">
            <span class="order-list-img">
              <img src="../../public/img/personal-center-img1.png">
            </span>
            <span class="order-list-text">待付款</span>
          </a>
          <a href="javascript:;" class="order-list order1">
            <span class="order-list-img">
              <img src="../../public/img/personal-center-img2.png">
            </span>
            <span class="order-list-text">待发货</span>
          </a>
          <a href="javascript:;" class="order-list order1">
            <span class="order-list-img">
              <img src="../../public/img/personal-center-img3.png">
            </span>
            <span class="order-list-text">待收货</span>
            <i>1</i>
          </a>
          <a href="javascript:;" class="order-list order1">
            <span class="order-list-img">
              <img src="../../public/img/personal-center-img4.png">
            </span>
            <span class="order-list-text">待评价</span>
            <i>2</i>
          </a>
          <a href="javascript:;" class="order-list order1">
            <span class="order-list-img">
              <img src="../../public/img/personal-center-img5.png">
            </span>
            <span class="order-list-text">售后</span>
          </a>
        </div>
        
      </div>
      <div class="gary-bg"></div>
      <div class="mine-other-list">
        <a href="javascript:;" class="mine-list-item">
          <img src="../../public/img/arrow-right 3.png">
          <span class="mine-item-img">
            <img src="../../public/img/personal-center-img10.png">
          </span>
          <span>我的优惠券</span>
        </a>
        <a href="javascript:;" class="mine-list-item">
          <img src="../../public/img/arrow-right 3.png">
          <span class="mine-item-img">
            <img src="../../public/img/personal-center-img11.png">
          </span>
          <span>收货地址</span>
        </a>
        <a href="javascript:;" class="mine-list-item">
          <img src="../../public/img/arrow-right 3.png">
          <span class="mine-item-img">
            <img src="../../public/img/personal-center-img12.png">
          </span>
          <span>售后服务</span>
        </a>
        <a href="javascript:;" class="mine-list-item">
          <img src="../../public/img/arrow-right 3.png">
          <span class="mine-item-img">
            <img src="../../public/img/personal-center-img13.png">
          </span>
          <span>我的足迹</span>
        </a>
        <a href="javascript:;" class="mine-list-item">
          <img src="../../public/img/arrow-right 3.png">
          <span class="mine-item-img">
            <img src="../../public/img/personal-center-img14.png">
          </span>
          <span>我的收藏</span>
        </a>
      </div>


    </div>



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
.mine{
  background: #f8f8f8;
}
.gary-bg{
  width: 100%;
  height: 0.4rem;
  background: #F7F7F7;
}
/* 页头 */
.mine .mine-header{
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  box-sizing: border-box;
  padding: 0.8rem 1rem;
  display: flex;
}
.mine .mine-header>p{
  width: 60%;
  text-align: right;
  font-size: 1rem;
}
.mine .mine-header>a{
  width: 38%;
  font-size: 0.85rem;
  text-align: right;
  line-height: 1.55rem;
}
/* 主体内容 */
/* 个人信息 */
.mine-body{
  margin: 3.1rem 0;
}
.mine-pic-container{
  width: 100%;
  position: relative;
}
.mine-pic-container img{
  width: 100%;
  z-index: 1;
}
.mine-personal-box{
  padding: 0 5%;
  position: absolute;
  top: 0;
  width: 90%;
  height: 100%;
  
}
.mine-personal-img{
  width: 4.25rem;
  height: 4.25rem;
  overflow: hidden;
  border: 1px solid #D7D1D1;
  border-radius: 50%;
  float: left;
  margin-top: 1.5rem;
}
.mine-personal-img img{
  width: 100%;
}
.mine-personal-info{
  float: left;
  margin-top: 3rem;
  margin-left: 0.8rem;
  font-size: 1rem;
  color: #fff;
}

/* 订单详情 */
.order-container{
  width: 100%;
  background: #fff;
  padding: 1rem 0;
}
.order-container .myorder{
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
}
.order-container .myorder p{
  font-size: 0.9rem;
  font-weight: 600;
}
.order-container .myorder a{
  color: #888;
}
.order-container .myorder a img{
  width: 1rem;
  float: right;
}
.other-order{
  padding: 0.8rem 0;
}
.other-order a{
  width: 20%;
  text-align: center;
  float: left;
  display: block;
  position: relative;
}
.other-order a span img{
  width: 1.5rem;
}
.other-order a span{
  display: block;
}
.other-order a span:last-child{
  width: 100%;
  display: inline-block;
  font-size: 0.85rem;
  color: #797778;
}
.other-order a i{
  position: absolute;
  width: 0.8rem;
  height: 0.8rem;
  right: 1rem;
  top:-0.3rem;
  color: #f00;
  border:1px solid #f00;
  font-weight: 600;
  border-radius: 50%;
  background: #fff;
}

/* 其他列表 */
.mine-other-list{
  background: #fff;
}
.mine-other-list a{
  display: block;
  width: 94%;
  height: 2.8rem;
  line-height: 2.8rem;
  padding: 0 3%;
  font-size: 0.85rem;
  color: #797778;
  border-bottom: 1px solid #E6E6E6;
}
.mine-other-list a span img{
  float: left;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0.6rem;
}
.mine-other-list a span:last-child{
  margin-left: 1rem;
}
.mine-other-list a img{
  width: 1.3rem;
  float: right;
  margin-top: 0.6rem;
}
</style>