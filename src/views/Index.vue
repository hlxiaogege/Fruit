<template>
  <div>
    <div class="myheadNav">
      <div class="content">
        <a href="javascript:;" class="position">
          <span>
            <img src="../../public/img/scan.png">
          </span>
          <p>地址</p>
        </a>
        <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </div>
    </div>
    <div class="index-bigbox">
      <div class="banner">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <a href="javascript:;"><img src="../../public/img/banner-img2.jpg"></a>
          </van-swipe-item>
          <van-swipe-item>
            <a href="javascript:;"><img src="../../public/img/banner-img2.jpg"></a>
          </van-swipe-item>
          <van-swipe-item>
            <a href="javascript:;"><img src="../../public/img/banner-img3.jpg"></a>
          </van-swipe-item>
          <van-swipe-item>
            <a href="javascript:;"><img src="../../public/img/banner-img3.jpg"></a>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="garydiv"></div>
      <div class="classify-menu classfix">
        <a href="javascript:;" class="classify-menu-box1">
          <span class="classify-menu-img1">
            <img src="../../public/img/trophy.png">
          </span>
          <span class="classify-menu-text1">水果特惠</span>
        </a>
        <a href="javascript:;" class="classify-menu-box1">
          <span class="classify-menu-img1" style="background:#E6C3BD">
            <img src="../../public/img/package.png">
          </span>
          <span class="classify-menu-text1">每日必抢</span>
        </a>
        <a href="javascript:;" class="classify-menu-box1">
          <span class="classify-menu-img1" style="background:#EED0B8">
            <img src="../../public/img/grass.png">
          </span>
          <span class="classify-menu-text1">嗨吃福利</span>
        </a>
        <a href="javascript:;" class="classify-menu-box1">
          <span class="classify-menu-img1" style="background:#8CB2C5">
            <img src="../../public/img/diamond.png">
          </span>
          <span class="classify-menu-text1">鲜蜂力荐</span>
        </a>
      </div>
      <div class="garydiv"></div>
      <!-- 品牌特卖 -->
      <div class="brand-box1">
        <span class="brand-text1">品牌特卖</span>
        <span class="brand-img1"></span>
      </div>
      <div class="special-sale-box1">
        <a href="javascript:;" class="special-sale-img">
          <img src="../../public/img/special-sale-img1.jpg">
        </a>
        <a href="javascript:;" class="special-sale-img">
          <img src="../../public/img/special-sale-img3.jpg">
        </a>
        <a href="javascript:;" class="special-sale-img">
          <img src="../../public/img/special-sale-img4.jpg">
        </a>
      </div>
      <div class="garydiv"></div>
      <!-- 优选水果 -->
      <div class="brand-box1">
        <span class="brand-text1">优选水果</span>
        <span class="brand-img1"></span>
      </div>
      <div class="special-sale-banner">
        <img src="../../public/img/optimization-img1.jpg">
      </div>
      <div class="special-sale-box3">
        <div class="special-sale-box4"></div>
      </div>
    </div>

    <tabbar ref="tab"></tabbar>
  </div>
</template>
<script>
import tabbar from "../components/tabbar"
export default {
  data() {
    return {
      value:"",
    }
  },
  methods: {
    onSearch(){
      
    }
  },
  components:{
    'tabbar':tabbar
  },
  mounted(){
    this.$refs.tab.active=0;
  }
}
</script>
<style>
/* 主页头部 */
.myheadNav{
  width: 100%;
  position: fixed;
  top: 0;
  padding: 0.8rem  0.3rem;
  background-color: #fff;
  z-index: 100;
}
.myheadNav .content{
  display: flex;
  justify-content: space-around;
}
.myheadNav .content .position{
  width: 15%;
  text-align: center;
}
.myheadNav .content .position img{
  width: 1rem;
  height: 1rem;
}
.myheadNav .content .position p{
  color: #A8A3A7;
}
.myheadNav .van-search--show-action {
  padding: 0;
}
/* 主体 */
.index-bigbox{
  margin-top: 3.8rem;
  margin-bottom: 3rem;
}
.banner img{
  width: 100%;
}
.classify-menu{
  padding-bottom: 0.75rem;
}
.classify-menu-text1{
  width: 100%;
  background: #fff;
}
.classify-menu-box1 {
  width: 25%;
  float: left;
  text-align: center;
  margin-top: 1rem;
}
.classify-menu-img1 {
  width: 3.1rem;
  height: 3.1rem;
  display: inline-block;
  border-radius: 50%;
  background: #9BCBB5;
}
.classify-menu-img1 img {
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
  margin-top: 0.75rem;
}
.classify-menu-text1 {
  width: 100%;
  display: block;
  /* float: left; */
  text-align: center;
  margin-top: 0.6rem;
  font-size: 0.85rem;
}
/* 品牌特卖 */
.brand-box1 {
  width: 100%;
  height: 2.8rem;
  text-align: center;
  background: #fff;
  margin-top: 0.3rem;
}
.brand-text1 {
  font-size: 1.1rem;
  display: inline-block;
  line-height: 2.8rem;
}
.brand-img1 {
  width: 1.1rem;
  height: 1.1rem;
  margin-left: 0.3rem;
  background: url(../../public/img/arrow-right2.png) no-repeat center center;
  background-size: 100%;
  display: inline-block;
  vertical-align: middle;
  margin-top: -0.3rem;
}
.special-sale-box1 {
  display: flex;
  justify-content: space-around;
  background: #fff;
  padding: 0px 3% 10px 3%;
}
.special-sale-img{
  width: 30%;
  text-align: center;
}
.special-sale-img img{
  width: 100%;
}
/* 优选水果 */
.special-sale-banner {
  width: 94%;
  padding: 0px 3% 10px 3%;
  background-color: #fff;
}
.special-sale-banner img {
  width: 100%;
  border-radius: 3.1rem;
}
</style>