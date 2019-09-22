<template>
  <div style="background: #F5F5F4;">
    <div class="carts-header">
      <div class="header-center-title">购物车</div>
      <a href="javascript:;" class="header-right">管理</a>
    </div>
    <div class="shop-cart-bigbox classfix">
      <div class="cart-title">先锋侠需要您的精确坐标</div>
      <div class="cart-title">收货时间 
        <a href="javascript:;">今天30分钟可送达(可预订)</a>
      </div>
      <div class="shop-cart-listbox classfix">
        <div class="index-goods classfix">
          <span class="shop-cart-check2"></span>
          <span class="index-goods-img">
            <img src="../../public/img/fruits-img12.png">
          </span>
          <div class="index-goods-textbox">
            <span class="index-goods-text1">1SNP 燕窝补水面膜 10片/盒含燕窝精华 双倍补水保湿</span>
            <div class="index-goods-text2">￥<i class="priceJs">10.00</i></div>
            <div class="shop-cart-box3">
              <a class="shop-cart-subtract" href="javascript:;"></a>
              <input type="tel" value="1" class="shop-cart-numer">
              <a class="shop-cart-add" href="javascript:;"></a>
            </div>
          </div>
        </div>
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
    this.$refs.tab.active=2;
  }
}
</script>
<style>
/* 页头 */
.carts-header{
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  padding: 0.5rem 0.3rem;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom: 1px solid #F6F6F4;
}
.header-center-title{
  float: left;
  width: 58%;
  text-align: right;
  font-size: 1rem;
}
.header-right{
  width: 25%;
  float: right;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.3rem;
  margin-top: 0.2rem;
}
/* 主体内容 */
.shop-cart-bigbox {
  width: 100%;
  margin-top: 2.7rem;
  margin-bottom: 6rem;
}
.cart-title {
  width: 94%;
  height: 2.5rem;
  line-height: 2.5rem;
  padding: 0px 3%;
  background: url(../../public/img/arrow-right.png) no-repeat 97% center #fff;
  background-size: 6%;
  margin-bottom: 0.3rem;
  font-size: 0.85rem;
}
.cart-title a {
  float: right;
  margin-right: 1.5rem;
  color: #379EDE;
}
/* 每一个商品 */
.shop-cart-listbox {
  width: 100%;
  margin-bottom: 0.5rem;
}
.index-goods {
  width: 94%;
  padding: 0.3rem 3%;
  display: flex;
  background-color: #FFFFFF;
  border-top: 1px solid #F9F9F9;
}
.shop-cart-check2 {
  width: 1.9rem;
  height: 7.5rem;
  float: left;
}



.index-goods-img {
  width: 6.25rem;
  height: 6.25rem;
  padding: 0.6rem 0px;
  float: left;
}
.index-goods-img img{
  width: 6.25rem;
  height: 6.25rem;
}
.index-goods-textbox {
  height: 7rem;
}
.index-goods-text1 {
  width: 100%;
  height: 2.5rem;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.25rem;
  color: #333;
  font-size: 0.9rem;
  margin-top: 0.625rem;
}
.index-goods-text2 {
  width: 100%;
  color: #FF9201;
  float: left;
  margin-top: 0.28rem;
  font-size: 1.125rem;
}
.shop-cart-box3 {
  width: 100%;
  float: left;
  margin-top: 0.28rem;
}
.shop-cart-subtract {
  width: 1.5rem;
  height: 1.5rem;
  float: left;
  background: url(../../public/img/subtract.png) no-repeat center center;
  background-size: 100%;
}
.shop-cart-numer {
  float: left;
  font-size: 0.88rem;
  line-height: 1.5rem;
  width: 1.25rem;
  border: none;
  outline: none;
  padding-left: 0.625rem;
}
.shop-cart-add {
    width: 1.5rem;
    height: 1.5rem;
    float: left;
    background: url(../../public/img/add.png) no-repeat center center;
    background-size: 100%;
}
</style>