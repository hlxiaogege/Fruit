<template>
  <div>
    <div class="myheadNav" id="myhead">
      <div class="content">
        <a href="javascript:;" class="position">
          <span>
            <img src="../../public/img/shaoma.png">
          </span>
          <span>扫一扫</span>
        </a>
        <van-search style="width:70%" v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @focus="tosearch" @search="onSearch">
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </div>
    </div>
    <div class="index-bigbox">
      <div class="banner">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <a href="javascript:;"><img src="../../public/img/banner-img1.png"></a>
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
      <div class="special-sale-box3 classfix">
        <div class="special-sale-box4" v-for="(item,index) in fruitlist" :key="index" @click="notify">
          <a href="javascript:;" class="special-sale-img1">
            <img :src="item.img">
          </a>
          <a href="javascript:;" class="special-sale-tbox">{{item.title}}</a>
          <div class="special-sale-tbox2">
            <span class="special-sale-text1" v-show="item.giving">买一赠一</span>
          </div>
          <div class="special-sale-text2">
            <span>￥{{item.discount.toFixed(2)}} </span>
            <i>￥{{item.original.toFixed(2)}}</i>
          </div>
        </div>
      </div>
      <!-- 酒水饮料 -->
      <div class="brand-box1">
        <span class="brand-text1">酒水饮料</span>
        <span class="brand-img1"></span>
      </div>
      <div class="special-sale-banner">
        <img src="../../public/img/optimization-img2.jpg">
      </div>
      <div class="special-sale-box3 classfix">
        <div class="special-sale-box4" v-for="(item,index) in drinklist" :key="index" @click="notify">
          <a href="javascript:;" class="special-sale-img1">
            <img :src="item.img">
          </a>
          <a href="javascript:;" class="special-sale-tbox">{{item.title}}</a>
          <div class="special-sale-tbox2">
            <span class="special-sale-text1" v-show="item.giving">买一赠一</span>
          </div>
          <div class="special-sale-text2">
            <span>￥{{item.discount.toFixed(2)}} </span>
            <i>￥{{item.original.toFixed(2)}}</i>
          </div>
        </div>
      </div>
      <!-- 休闲零食 -->
      <div class="brand-box1">
        <span class="brand-text1">休闲零食</span>
        <span class="brand-img1"></span>
      </div>
      <div class="special-sale-banner">
        <img src="../../public/img/optimization-img3.jpg">
      </div>
      <div class="special-sale-box3 classfix">
        <div class="special-sale-box4" v-for="(item,index) in snacklist" :key="index" @click="notify">
          <a href="javascript:;" class="special-sale-img1">
            <img :src="item.img">
          </a>
          <a href="javascript:;" class="special-sale-tbox">{{item.title}}</a>
          <div class="special-sale-tbox2">
            <span class="special-sale-text1" v-show="item.giving">买一赠一</span>
          </div>
          <div class="special-sale-text2">
            <span>￥{{item.discount.toFixed(2)}} </span>
            <i>￥{{item.original.toFixed(2)}}</i>
          </div>
        </div>
      </div>
      <!-- 新鲜蔬菜 -->
      <div class="brand-box1">
        <span class="brand-text1">新鲜蔬菜</span>
        <span class="brand-img1"></span>
      </div>
      <div class="special-sale-banner">
        <img src="../../public/img/vegetable-big1.png">
      </div>
      <div class="special-sale-box3 classfix">
        <div class="special-sale-box4" v-for="(item,index) in vegetablelist" :key="index" @click="notify">
          <a href="javascript:;" class="special-sale-img1">
            <img :src="item.img">
          </a>
          <a href="javascript:;" class="special-sale-tbox">{{item.title}}</a>
          <div class="special-sale-tbox2">
            <span class="special-sale-text1" v-show="item.giving">买一赠一</span>
          </div>
          <div class="special-sale-text2">
            <span>￥{{item.discount.toFixed(2)}} </span>
            <i>￥{{item.original.toFixed(2)}}</i>
          </div>
        </div>
      </div>
      <!-- 肉类生鲜 -->
      <div class="brand-box1">
        <span class="brand-text1">肉类生鲜</span>
        <span class="brand-img1"></span>
      </div>
      <div class="special-sale-banner">
        <img src="../../public/img/meat-big1.png">
      </div>
      <div class="special-sale-box3 classfix">
        <div class="special-sale-box4" v-for="(item,index) in meatlist" :key="index" @click="notify">
          <a href="javascript:;" class="special-sale-img1">
            <img :src="item.img">
          </a>
          <a href="javascript:;" class="special-sale-tbox">{{item.title}}</a>
          <div class="special-sale-tbox2">
            <span class="special-sale-text1" v-show="item.giving">买一赠一</span>
          </div>
          <div class="special-sale-text2">
            <span>￥{{item.discount.toFixed(2)}} </span>
            <i>￥{{item.original.toFixed(2)}}</i>
          </div>
        </div>
      </div>
      <!-- 鱼虾河鲜 -->
      <div class="brand-box1">
        <span class="brand-text1">鱼虾河鲜</span>
        <span class="brand-img1"></span>
      </div>
      <div class="special-sale-banner">
        <img src="../../public/img/fish-big1.png">
      </div>
      <div class="special-sale-box3 classfix">
        <div class="special-sale-box4" v-for="(item,index) in fishlist" :key="index" @click="notify">
          <a href="javascript:;" class="special-sale-img1">
            <img :src="item.img">
          </a>
          <a href="javascript:;" class="special-sale-tbox">{{item.title}}</a>
          <div class="special-sale-tbox2">
            <span class="special-sale-text1" v-show="item.giving">买一赠一</span>
          </div>
          <div class="special-sale-text2">
            <span>￥{{item.discount.toFixed(2)}} </span>
            <i>￥{{item.original.toFixed(2)}}</i>
          </div>
        </div>
      </div>
      <!-- 猜猜你喜欢 -->
      <div class="brand-box1">
          <span class="brand-text1">猜猜你喜欢</span>
          <span class="brand-img1"></span>
        </div>
      <div class="guesslike">
        <div class="guesslike-box">
          <a href="javascript:;" class="guesslike-item" v-for="(item,index) in grusslist" :key="index">
            <div class="grusslike-img">
              <img :src="require(`../../public/img/${item.img_url}`)">
            </div>
            <div class="grusslike-content">
              <div class="grusslike-title">{{item.title}}</div>
              <div class="grusslike-price">
                <span>￥{{(item.price*0.85).toFixed(1)}}</span>
                <i>￥{{item.price.toFixed(2)}}</i>
              </div>
            </div>
          </a>
        </div>
        <a @click="loadMore" class="load" href="javascript:;">{{loads}}</a>
      </div>
    </div>
    <a @click="backTop" :class="backBtn?'scroll-btn':'scroll-btnclose'" href="javascript:;">
      <img src="../../public/img/topback.png">
    </a>
    <tabbar ref="tab"></tabbar>
  </div>
</template>
<script>
import tabbar from "../components/tabbar"
export default {
  data() {
    return {
      value:"",
      fruitlist:[
        {
          img:require("../../public/img/fruits-img2.png"),
          title:"新鲜青柠500g/盒",
          giving:true,
          original:12.8,
          discount:10.8
        },
        {
          img:require("../../public/img/fruits-img4.png"),
          title:"新鲜橙子500g/盒",
          giving:false,
          original:10.8,
          discount:8.8
        },
        {
          img:require("../../public/img/fruits-img7.png"),
          title:"新鲜猕猴桃500g/盒",
          giving:false,
          original:19.9,
          discount:15.9
        },
      ],
      drinklist:[
        {
          img:require("../../public/img/fruits-img8.png"),
          title:"可口可乐500g/瓶",
          giving:false,
          original:4.00,
          discount:6.00
        },
        {
          img:require("../../public/img/fruits-img9.png"),
          title:"RIO鸡尾酒500g/瓶水蜜桃味",
          giving:true,
          original:10.8,
          discount:8.8
        },
        {
          img:require("../../public/img/fruits-img10.png"),
          title:"百威啤酒400ml/瓶",
          giving:true,
          original:8.88,
          discount:7.5
        },
      ],
      snacklist:[
        {
          img:require("../../public/img/fruits-img11.png"),
          title:"每日坚果800g/箱",
          giving:false,
          original:158,
          discount:128
        },
        {
          img:require("../../public/img/fruits-img12.png"),
          title:"乐事薯片鱿鱼味500g/袋",
          giving:true,
          original:12.8,
          discount:9.8
        },
        {
          img:require("../../public/img/fruits-img13.png"),
          title:"新出炉菠萝包500g/斤",
          giving:true,
          original:12.8,
          discount:10.8
        },
      ],
      vegetablelist:[
        {
          img:require("../../public/img/vegetable-img1.png"),
          title:"农家本地西红柿 500g",
          giving:false,
          original:3.6,
          discount:4.8
        },
        {
          img:require("../../public/img/vegetable-img2.png"),
          title:"当天新鲜青菜豆角 500g",
          giving:false,
          original:2.8,
          discount:3.5
        },
        {
          img:require("../../public/img/vegetable-img3.png"),
          title:"纯正天然有机茄子 500g",
          giving:false,
          original:4.5,
          discount:5.5
        },
      ],
      meatlist:[
        {
          img:require("../../public/img/meat-img1.png"),
          title:"本地黑猪肉后腿肉肉片 500g",
          giving:false,
          original:28.8,
          discount:24.8
        },
        {
          img:require("../../public/img/meat-img2.png"),
          title:"锡原牧场羊肉沫 500g",
          giving:false,
          original:29.8,
          discount:27.8
        },
        {
          img:require("../../public/img/meat-img3.png"),
          title:"大西冷牛腩肉 500g",
          giving:false,
          original:35.5,
          discount:32.8
        },
      ],
      fishlist:[
        {
          img:require("../../public/img/fish-img1.png"),
          title:"整盒虾鲜活海鲜水产超大虾基围虾",
          giving:false,
          original:29.9,
          discount:26.9
        },
        {
          img:require("../../public/img/fish-img2.png"),
          title:"洪泽湖纯正新鲜鲶鱼 500g",
          giving:false,
          original:9.8,
          discount:7.9
        },
        {
          img:require("../../public/img/fish-img3.png"),
          title:"洪泽湖野生胖头鱼 500g",
          giving:false,
          original:12.8,
          discount:10.8
        },
      ],
      grusslist:[],
      backBtn:false,
      scrollTop:0,
      timer:null,
      pno:0,
      loads:"加载更多"
    }
  },
  methods: {
    loadMore(){
      this.pno++;
      var url="index";
      this.axios.get(url,{
        params:{
          pno:this.pno
        }
      }).then(res=>{
        var rows=res.data.data;
       console.log(rows.length);
       if(rows.length==0){
         this.loads="暂无更多数据"
       }
        this.grusslist=this.grusslist.concat(rows);
      }).catch(err=>{})
    },
    tosearch(){
      this.$router.push("/search");
    },
    tuochStop(){
      clearInterval(this.timer);
    },
    buttonShow(){
      this.scrollTop= window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if(this.scrollTop>700){
        this.backBtn=true;
      }else{
        this.backBtn=false;
      }
    },
    backTop(){
      const that=this;
      this.timer=setInterval(()=>{
        let speed=Math.floor(-that.scrollTop/10);
        if(this.scrollTop>that.scrollTop)clearInterval(this.timer)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + speed;

        if(that.scrollTop===0){
          clearInterval(this.timer);
        }
      },16)
    },
    onSearch(){
      
    },
    notify(){
      this.$notify({
        message: '该功能尚未完善',
        color: '#ad0000',
        background: '#ffe1e1'
      })
    }
  },
  created(){
    this.loadMore();
  },
  components:{
    'tabbar':tabbar
  },
  mounted(){
    this.$refs.tab.active=0;
    window.addEventListener('scroll', this.buttonShow);
    window.addEventListener("touchstart",this.tuochStop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.buttonShow)
  },
}
</script>
<style>
/* 返回顶部按钮 */
.scroll-btn{
  width: 3rem;
  height: 3rem;
  position: fixed;
  right: 5%;
  bottom: 15%;
  opacity: 1;
  transition: all 1s ease-in-out;
}
.scroll-btnclose{
  opacity: 0;
  transform: translateX(-20px);
  transition: all 1s ease-in-out;
}
.scroll-btn img{
  width: 100%;
}
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
  width: 20%;
  text-align: center;
}
.myheadNav .content .position span{
  float: left;
}
.myheadNav .content .position span:last-child{
  margin-top: 0.5rem;
  margin-left: 0.3rem;
}
.myheadNav .content .position img{
  width: 1.2rem;
  height: 1.2rem;
  margin-top: 0.5rem;
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
  margin-bottom: 4rem;
}
.index-bigbox .load{
  display: block;
  text-align: center;
  color: #aaa;
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
.special-sale-box3 {
  width: 100%;
  position: relative;
}
.special-sale-box4 {
  width: 33.3%;
  float: left;
  background: #fff;
}
.special-sale-img1 {
  display: block;
  width: 100%;
  text-align: center;
  position: relative;
}
.special-sale-img1 img {
  width: 60%;
  display: inline-block;
  margin: 0.3rem 0;
}
.special-sale-tbox {
  width: 90%;
  padding: 0 5%;
  display: block;
  line-height: 1.3rem;
  height: 2.5rem;
  overflow: hidden;
  font-size: 0.85rem;
}
.special-sale-tbox2 {
  width: 90%;
  height: 1.2rem;
  padding: 0px 5%;
}
.special-sale-text1 {
  padding: 0px 0.45rem;
  font-size: 0.75rem;
  color: #fff;
  background-color: #FF8950;
  border-radius: 0.2rem;
  height: 1.15rem;
  line-height: 1.15rem;
  margin-top: 1.25rem;
}
.special-sale-text2 {
  font-size: 0.85rem;
  color: #EA4D13;
  width: 90%;
  margin-top: 0.5rem;
  padding: 0px 5%;
  line-height: 1.15rem;
  height: 2.5rem;
}
.special-sale-text2 i {
  color: #979797;
  text-decoration: line-through;
  margin-left: 0.2rem;
}

/* 猜猜你喜欢 */
.guesslike{
  width: 100%;
  background: #f6f6f6;
}
.guesslike-box{
  padding: 3% 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.guesslike-box .guesslike-item{
  width: 46%;
  background: #fff;
  margin-bottom: 0.5rem;
}
.guesslike-box .guesslike-item .gresslike-img{
  width: 100%;
}
.guesslike-box .guesslike-item img{
  width: 100%;
}
.grusslike-title{
  font-size: 0.9rem;
  height: 1.9rem;
  margin:0.5rem 0.8rem ;
  color: #333;
}
.grusslike-price{
  font-size: 1rem;
  color: #EA4D13;
  width: 90%;
  margin-top: 0.5rem;
  padding: 0px 5%;
  line-height: 1.15rem;
  height: 2.5rem;
}
.grusslike-price i{
  color: #979797;
  text-decoration: line-through;
  margin-left: 0.2rem;
}
</style>