<template>
  <div class="carts" style="background: #F5F5F4;">
    <div class="carts-header">
      <div class="header-center-title">购物车</div>
      <a href="javascript:;" class="header-right">管理</a>
    </div>
    <div class="shop-cart-bigbox classfix">
      <div class="cart-title">先锋侠需要您的精确坐标</div>
      <div class="cart-title">收货时间 
        <a href="javascript:;">今天30分钟可送达(可预订)</a>
      </div>
      <div class="shop-cart-listbox classfix" v-for="(item,index) in list" :key="index">
        <div class="index-goods classfix">
          <span class="shop-cart-check2">
            <input type="checkbox" class="shopcart-input1 btn2" v-model="checkedList" :value="item.id">
          </span>
          <span class="index-goods-img">
            <img :src="require(`../../public/img/${item.img_url}`)">
          </span>
          <div class="index-goods-textbox">
            <span class="index-goods-text1">{{item.title}}</span>
            <div class="index-goods-text2">￥<i class="priceJs">{{item.price.toFixed(2)}}</i></div>
            <div class="shop-cart-box3">
              <a class="shop-cart-subtract" :data-id="item.id" :data-count="item.count" @click="handle(-1,$event)" href="javascript:;"></a>
              <input type="tel" :value="item.count" class="shop-cart-numer">
              <a class="shop-cart-add" :data-id="item.id" :data-count="item.count" @click="handle(1,$event)" href="javascript:;"></a>
            </div>
          </div>
        </div>
        <div class="shopPrice">
          <div>
            小计：￥
            <span class="ShopTotal">{{(item.count*item.price).toFixed(2)}}</span>
          </div>
          <a @click="delItem(item.id)" href="javascript:;">删除</a>
        </div>
      </div>
      <div :style="{display:isLogin}" class="carts-notLogin">
        您尚未登录
        <router-link to="/login">点我去登录</router-link>
      </div>
      <div :style="{display:empCart}" class="emp-carts">
        <p><img src="../../public/img/empcart.png"></p>
        <p class="second-p">空空如也~~</p>
        <p><router-link to="/classify">去逛逛</router-link></p>
      </div>
    </div>
    <div class="shop-cart-total">
      <label for="" class="checkall">
        <span class="shop-cart-check1">
          <input v-model="checked" @click="chooseAll" type="checkbox" id="ckAll">
        </span>
        全选
      </label>
      <span class="scart-total-text2">合计：￥</span>
      <span class="scart-total-text3">{{total.toFixed(2)}}</span>
      <a href="javascript:;" class="scart-total-text4">去结算</a>
    </div>
    <tabbar ref="tab"></tabbar>
  </div>
</template>
<script>
import tabbar from "../components/tabbar"
export default {
  data(){
    return{
      checked:"",
      list:[],
      checkedList:[],
      isLogin:"none",
      empCart:"none"
    }
  },
  methods:{
    chooseAll(e){
      var checked=e.target.checked;
      var arr=[];
      if(checked){
        for(var p of this.list){
          arr.push(p.id);
        }
        this.checkedList=arr;
      }else{
        this.checkedList=[];
      }
      
    },
    delItem(id){
      this.$dialog.confirm({
        message:"是否删除这件商品"
      }).then(()=>{
        var url="delItem";
        this.axios.get(url,{params:{id}}).then(res=>{
          if(res.data.code==1){
            this.$toast("删除成功");
            this.loadProduct();
          }else{
            this.$toast("删除失败")
          }
        }).catch(err=>{})
      }).catch(()=>{})
    },
    loadProduct(){
     var url="carts";
     this.axios.get(url).then(res=>{
       if(res.data.code==-1){
        this.isLogin="block";
       }else{
         var rows=res.data.data;
         for(var p of rows){
           p.isChecked=false;
         }
         this.list=rows;
         rows.length==0&&(this.empCart="block")
       }
     })
    },
    handle(i,e){
      var id=e.target.dataset.id;
      var count=parseInt(e.target.dataset.count)+i;
      if(count==0){
        this.delItem(id);
        return;
      }
      var url="updateCount";
      this.axios.get(url,{params:{id,count}})
      .then(res=>{
        if(res.data.code==1){
          this.loadProduct();
        }else{
          this.$toast("修改失败");
        }
      }).catch(err=>{})
    },
  },
  watch: {
    checkedList(){
      if(this.checkedList.length==this.list.length){
        this.checked=true;
      }else{
        this.checked=false;
      }
    },
    list(){
      if(this.list.length==0){
        this.checked=false;
      }
    }
  },
  computed:{
    total(){
      var sum=0;
      for(var item of this.list){
       for(var i of this.checkedList){
          if(item.id==i){
          sum+=item.count*item.price;
        }
       }
      }
      return sum;
    }
  },
  components:{
    'tabbar':tabbar
  },
  created(){
    this.loadProduct();
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
/* 未登录 */
.carts-notLogin{
  text-align: center;
  background: #fff;
  padding: 2rem 0;
  font-size: 1rem;
}
.carts-notLogin a{
  color:#379EDE;
}
/* 购物车空的 */
.emp-carts{
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  background: #fff;
}
.emp-carts p{
  margin-bottom: 0.6rem;
}
.second-p{
  font-weight: 600;
  font-size: 1rem;
  color:#999;
}
.emp-carts p a{
  display: inline-block;
  height: 1.5rem;
  line-height: 1.5rem;
  background:  #FF9201;
  color: #fff;
  padding: 0 1rem;
  font-size: 0.85rem;
  border-radius: 15px;
}



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
input[type=checkbox] {
  position: relative;
  float: left;
  width: 1.4rem;
  height: 1.4rem;
  overflow: hidden;
  margin-top: 0.45rem;
}
.shopcart-input1 {
  margin-top: 3.15rem !important;
}
input[type=checkbox]::after {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1.4rem;
  height: 1.4rem;
  background: url(../../public/img/check3.png) no-repeat center center;
  background-size: 100%;
}
input[type=checkbox]:checked::after {
  background: url(../../public/img/check4.png) no-repeat;
  background-size: 100%;
  content: '';
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
  width: 60%;
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
.index-goods-textbox .shop-cart-box3 {
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


/* 本店总计 */
.carts .shopPrice {
  width: 94%;
  display: flex;
  height: 30px;
  line-height: 30px;
  background: #fff;
  padding: 0px 3%;
  font-size: 14px;
  border-top: 1px solid #F9F9F9;
  border-bottom: 1px solid #F9F9F9;
  justify-content: space-between;
}
.carts .shopPrice a{
  background:  #FF9201;
  color: #fff;
  padding: 0 1rem;
  border-radius: 15px;
}

/* 全选 */
.shop-cart-total {
  width: 94%;
  height: 2.8rem;
  position: fixed;
  bottom: 3.125rem;
  left: 0px;
  background-color: #FFFFFF;
  z-index: 999;
  padding: 0px 3%;
  border-bottom: 1px solid #F7F7F7;
  line-height: 2.8rem;
}
.checkall {
  float: left;
  font-size: 1rem;
}
#ckAll {
  margin-top: 0.615rem;
  margin-right: 0.625rem;
}
.scart-total-text2 {
  float: left;
  margin-left: 0.425rem;
  font-size: 0.88rem;
  color: #A3A3A3;
}
.scart-total-text3 {
  float: left;
  font-size: 1rem;
  font-weight: 600;
  color: #FF9201;
}
.scart-total-text4 {
  width: 4.5rem;
  text-align: center;
  float: right;
  background: #FF9201;
  height: 1.9rem;
  margin-top: 0.425rem;
  line-height: 1.9rem;
  border-radius: 0.925rem;
  color: #fff;
  font-size: 0.88rem;
}
</style>