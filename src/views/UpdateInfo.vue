<template>
  <div>
     <div class="info-header">
      <a @click="giveup">
        <img src="../../public/img/arrow-left2.png" alt="">
      </a>
      <p>修改信息</p>
     </div>
     <div class="info-container">
       <div class="info-img-box">
         <div class="info-img">
          <van-uploader :after-read="onRead" accept="image/*" multiple>
            <img class="head-img" src="../../public/img/timg1.jpg" ref="goodsImg"/>
            <button>更换图片</button>
          </van-uploader>
        </div>
        <div class="info-list">
          <span>昵称：</span>
          <van-field v-model="value" placeholder="请输入用户名" />
        </div>
        <div class="info-list">
          <span>性别：</span>
          <van-field v-model="sex" placeholder="请输入性别" />
        </div>
        <div class="sh-adress-add">
          <a href="javascript:;" @click="updateSuccess">保存</a>
        </div>
       </div>
     </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value:"青春微凉伴离殇",
      sex:"女"
    }
  },
  methods: {
    updateSuccess(){
      this.$toast.success("修改成功3秒后跳转");
        setTimeout(()=>{
          this.$router.push("/mine");
        },3000)
    },
    onRead(file) {
      console.log(file.content);
      //将原图片显示为选择的图片
      this.$refs.goodsImg.src = file.content;
		},
    giveup(){
      this.$dialog.confirm({
          message: "是否放弃修改吗？",
      }).then(()=>{
        this.$router.push("/mine");
      }).catch(()=>{});
    }
  },
}
</script>
<style>
/* header */
.info-header{
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  box-sizing: border-box;
  padding: 0.8rem 1rem;
  background: #fff;
  text-align: center;
}
.info-header a{
  float: left;
}
.info-header a img{
  width: 1.2rem;
}
.info-header p{
  font-size: 1rem;
} 
/* body */
.info-container{
  margin-top: 3.1rem;
  background-color: #fff;
}
.info-img-box{
  width: 100%;
  padding: 5%;
  text-align: center;
  box-sizing: border-box;
}
.info-img-box .info-img{
  width: 30%;
  margin: 0 auto;
}
.info-img-box .info-img img{
  width: 100%;
  border-radius: 50%;
}
.info-img-box .info-img button{
  border:1px solid darkorange;
  outline: 0;
  background: transparent;
  color: darkorange;
  font-size: 1rem;
  border-radius: 3px;
}
/* 输入框 */
.info-list{
  display: flex;
}
.info-list span{
  width: 15%;
  line-height: 44px;
  text-align: left;
  font-size: 0.85rem
}
.info-list input{
  color: #999;
}
</style>