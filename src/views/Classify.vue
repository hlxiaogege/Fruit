<template>
  <div class="nav-box">
    <div class="header">
      <van-search placeholder="请输入搜索关键词" v-model="value" />
    </div>
    <div class="classify-bigbox">
      <div class="classify-left">
        <div class="classify-perch"></div>
        <span :class="i==index?' pitch-on2':''" :data-i="index" class="classify-text1" v-for="(item,index) in leftMenu" :key="index" @click="chooseMenu">{{item}}</span>
        <span class="classify-text1">111</span>
        <span class="classify-text1">111</span>
        <span class="classify-text1">111</span>
        <span class="classify-text1">111</span>
        <span class="classify-text1">111</span>
        <span class="classify-text1">111</span>
        <div class="classify-perch2"></div>
      </div>
      <div class="classify-right-title">
        <a @click="rightMenu" data-n="1" href="javascript:;" class="classifyrt-text1" :class="n==1?'tcolor-yellow':''">综合排序</a>
        <a @click="rightMenu" data-n="2" href="javascript:;" class="classifyrt-text1 price" :class="n==2?'tcolor-yellow':''">
          按价格
          <i class="sort-img" :style="{display:n>0?'none':'inline-block'}"></i>
          <i @click="updown" :class="arrowShow?'sort-img2':'sort-img3'" :style="{display:n==0?'none':'inline-block'}"></i>
        </a>
        <a @click="showHiddenList" data-n="3" href="javascript:;" class="classifyrt-text1 list-show" :class="n==3?'tcolor-yellow':''">分类</a>
      </div>
      <div :class="hiddenShow?'classify-show':''" class="classify-hidden-list classfix">
        <a @click="chooseHiddenList" :class="m==index?'pitch-on-cl':''" v-for="(item,index) in hiddenlist" :key="index" :data-m="index" href="javascript:;" class="classify-list-text1">{{item}}</a>
      </div>
      <div :class="i==index?'showItem':''" class="classify-right classfix" v-for="(each,index) in lists" :key="index">
        <div class="classify-perch-r"></div>
        <div class="classify-box1" v-for="(item,id) in each" :key="id">
          <a href="javascript:;" class="classify-box1-img1">
            <img :src="item.img">
          </a>
          <div class="classify-box2">
            <a href="javascript:;" class="classify-box2-text1">
              {{item.title}}
            </a>
            <span class="classify-box2-text2">￥{{item.price}}</span>
            <div class="shop-cart-box3">
              <button>加入购物车</button>
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
  data() {
    return {
      value:"",
      i:0,
      n:0,
      m:1,
      g:0,
      hiddenShow:false,
      arrowShow:true,
      leftMenu:["热销新品","优选水果","卤味熟食","牛奶面包","热饮","冰淇淋","饮料酒水","休闲零食","方便速食","数码家电","环球美食","运动户外"],
      hiddenlist:["全部分类","进口水果","国产水果","柑橘橙柚","苹果/梨","桃杏梅枣"],
      lists:[
        [{img:require("../../public/img/fruits-img2.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:10.8},
        {img:require("../../public/img/fruits-img2.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:11.8},
        {img:require("../../public/img/fruits-img2.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:12.8},],
        [{img:require("../../public/img/fruits-img4.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:13.8},
        {img:require("../../public/img/fruits-img4.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:14.8},
        {img:require("../../public/img/fruits-img4.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:15.8},],
        [{img:require("../../public/img/fruits-img7.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:16.8},
        {img:require("../../public/img/fruits-img7.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:17.8},
        {img:require("../../public/img/fruits-img7.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:18.8},],
        [{img:require("../../public/img/fruits-img8.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:19.8},
        {img:require("../../public/img/fruits-img8.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:20.8},
        {img:require("../../public/img/fruits-img8.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:21.8},],
        [{img:require("../../public/img/fruits-img9.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:22.8},
        {img:require("../../public/img/fruits-img9.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:23.8},
        {img:require("../../public/img/fruits-img9.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:24.8},],
        [{img:require("../../public/img/fruits-img10.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:25.8},
        {img:require("../../public/img/fruits-img10.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:26.8},
        {img:require("../../public/img/fruits-img10.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:27.8},],
        [{img:require("../../public/img/fruits-img11.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:28.8},
        {img:require("../../public/img/fruits-img11.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:29.8},
        {img:require("../../public/img/fruits-img11.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:30.8},],
        [{img:require("../../public/img/fruits-img12.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:31.8},
        {img:require("../../public/img/fruits-img12.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:32.8},
        {img:require("../../public/img/fruits-img12.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:33.8},],
        [{img:require("../../public/img/fruits-img13.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:34.8},
        {img:require("../../public/img/fruits-img13.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:35.8},
        {img:require("../../public/img/fruits-img13.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:36.8},],
        [{img:require("../../public/img/fruits-img7.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:10.8},
        {img:require("../../public/img/fruits-img4.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:15.8},
        {img:require("../../public/img/fruits-img2.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:16.8},],
        [{img:require("../../public/img/fruits-img11.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:10.8},
        {img:require("../../public/img/fruits-img10.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:1.8},
        {img:require("../../public/img/fruits-img8.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:10.8},],
        [{img:require("../../public/img/fruits-img9.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:10.8},
        {img:require("../../public/img/fruits-img13.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:10.8},
        {img:require("../../public/img/fruits-img12.png"),title:"新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价",price:10.8},]

      ]
    }
  },
  methods: {
    chooseHiddenList(e){
      this.m=e.target.dataset.m;
      console.log(this.m);
    },
    showHiddenList(e){
      this.n=e.target.dataset.n;
      this.hiddenShow=!this.hiddenShow;
    },
    updown(){
      this.arrowShow=!this.arrowShow;
    },
    rightMenu(e){
      if(e.target.nodeName=="A"){
        this.n=e.target.dataset.n;
      }
    },
    chooseMenu(e){
      this.i=parseInt(e.target.dataset.i);
    }
  },
  components:{
    'tabbar':tabbar
  },
  mounted(){
    this.$refs.tab.active=1;
  }
}
</script>
<style>
.near-box {
  width: 100%;
  height: 100%;
  max-width: 640px;
  overflow: hidden;
  margin: 0 auto;
}
.header{
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  border-bottom: 1px solid #EFEAEE;
}
.classify-bigbox {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 2;
  padding-bottom: 6rem;
}
/* 左边固定菜单栏 */
.classify-left {
  width: 30%;
  float: left;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  border-right: 1px solid #F4F4F4;
}
.classify-perch {
  width: 100%;
  height: 3.3rem;
  float: left;
}
.classify-perch2 {
  width: 100%;
  height: 3.3rem;
  float: left;
  border-right: 0;
}
.pitch-on2 {
  position: relative;
}
.classify-text1 {
  width: 100%;
  float: left;
  text-align: center;
  height: 2.5rem;
  line-height: 2.5rem;
  overflow: hidden;
  font-size: 0.9rem;
  border-bottom: 1px solid #EFEAEE;
}
.pitch-on2:after {
  content: "";
  width: 0.2rem;
  height: 1.9rem;
  background-color: #FF9201;
  position: absolute;
  top: 0.27rem;
  left: 0;
}
/* 右边固定 */
.classify-right-title{
  width: 69.5%;
  height: 100%;
  font-size: 0.88rem;
  height: 2.5rem;
  line-height: 2.5rem;
  border-bottom: 1px solid #EFEAEE;
  position: fixed;
  top: 3.3rem;
  right: 0px;
  background-color: #fff;
}
.classifyrt-text1 {
  width: 33.3%;
  text-align: center;
  float: left;
  font-size: 0.9rem;
}
.tcolor-yellow {
  color: #FF9201;
}
.sort-img {
  width: 15px;
  height: 15px;
  display: inline-block;
  background: url(../../public/img/sort1.png) no-repeat center center;
  background-size: 100%;
  vertical-align: middle;
  margin-top: -3px;
}
.sort-img2 {
  width: 15px;
  height: 15px;
  display: inline-block;
  background: url(../../public/img/sort2.png) no-repeat center center;
  background-size: 100%;
  vertical-align: middle;
  margin-top: -3px;
}
.sort-img3 {
  width: 15px;
  height: 15px;
  display: inline-block;
  background: url(../../public/img/sort3.png) no-repeat center center;
  background-size: 100%;
  vertical-align: middle;
  margin-top: -3px;
}
/* 隐藏分类选项 */
.classify-hidden-list {
  width: 69.5%;
  position: fixed;
  z-index: 20;
  top: 6rem;
  right: 0px;
  background-color: #fff;
  height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all .5s ease-in-out;
}
.classify-show{
  height: 5rem;
  padding-top: 0.6rem;
  opacity: 1;
  border-bottom: 1px solid #EFEAEE;
}
.classify-list-text1 {
  width: 30%;
  text-align: center;
  border: 1px solid #EFEFEF;
  font-size: 0.7rem;
  height: 1.4rem;
  line-height: 1.4rem;
  margin-bottom: 0.6rem;
  border-radius: 0.2rem;
  float: left;
  margin-left: 2%;
}
.pitch-on-cl {
  color: #FF9201;
  border-color: #FF9201;
}
/* 商品列表 */
.classify-right {
  width: 69.5%;
  float: right;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  display: none;
}
.showItem{
  display: block;
}
.classify-perch-r {
  width: 100%;
  height: 6rem;
  float: left;
}
.classify-box1 {
  width: 100%;
  float: left;
  height: 5rem;
  border-bottom: 1px solid #EFEFEF;
}
.classify-box1-img1 {
  width: 5rem;
  height: 5rem;
  float: left;
  text-align: center;
}
.classify-box1-img1 img {
  width: 3.75rem;
  height: 3.75rem;
  display: inline-block;
  margin-top: 0.6rem;
}
.classify-box2 {
  display: block;
  margin-left: 5rem;
  height: 4.6rem;
  margin-top: 0.4rem;
}
.classify-box2-text1 {
  width: 100%;
  float: left;
  height: 2.5rem;
  line-height: 1.25rem;
  font-size: 0.85rem;
  overflow: hidden;
}
.classify-box2-text2 {
  float: left;
  font-size: 1rem;
  color: #FF9201;
  line-height: 1.85rem;
  margin-top: 0.31rem;
}
.shop-cart-box3 {
  float: right;
  padding: 0.3rem;
}
.shop-cart-box3 button{
  padding: 0.2rem;
  color: #333;
  background: linear-gradient(#fff, #d2d2d2); 
  border: 0;outline: 0;
  border-radius: 3px;
}
</style>