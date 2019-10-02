<template>
  <div class="forget-container">
    <div class="reg-header">
      <a @click="giveup">
        <img src="../../public/img/arrow-left2.png" alt="">
      </a>
      <p>修改密码</p>
     </div>
    <div class="forget-code-box">
      <form action="">
        <p class="forget-code-line">
          <i class="icon icon-phone"></i>
          <input class="forget-code-line-input" placeholder="请输入手机号码">
        </p>
        <p class="forget-code-line">
          <i class="icon icon-code"></i>
          <input class="forget-code-line-input" placeholder="输入验证码">
          <a href="javascript:;" @click="startTimer" class="forget-code-active" :class="{'forget-code-disabled':time<60}">
            {{time==60?"获取验证码":`${time}s后重新发送`}}
          </a>
        </p>
        <p class="forget-code-line">
          <i class="icon icon-psd"></i>
          <input type="password" class="forget-code-line-input" placeholder="请输入新密码">
        </p>
        <p class="forget-code-line">
          <i class="icon icon-psd"></i>
          <input type="password" class="forget-code-line-input" placeholder="请再次输入密码">
        </p>
        <div class="forget-code-btn">
          <button @click="alert">更改</button>
        </div>
        <div class="forget-forget">
          已有账号,
          <router-link to="/login">前往登录</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import myheader from "../components/myheader"
export default {
  data() {
    return {
      time:60,
      timer:null
    }
  },
  components:{
    "myheader":myheader,
  },
  methods: {
    startTimer(){
     if(this.time==60){
      this.time=59;
      this.timer=setInterval(()=>{
        if(this.time>0){
          this.time--;
        }else{
          clearInterval(this.timer);
          this.time=60;
        }
      },1000)
     }
    },
    alert(){
      this.$toast({
        message:"修改成功",
        position: 'bottom',
      });
      setTimeout(()=>{
        this.$router.push("/login");
      },3000);
    },
    giveup(){
      this.$dialog.confirm({
          message: "是否放弃修改吗？",
      }).then(()=>{
        this.$router.push("/login");
      }).catch(()=>{});
    }
  },
}
</script>
<style>
.forget-container{
  background: #fff;
  width: 100%;
  min-height: 100vh;
}
.forget-header{
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  box-sizing: border-box;
  padding: 0.8rem 1rem;
  background: #fff;
  text-align: center;
}
.forget-header a{
  float: left;
}
.forget-header a img{
  width: 1.2rem;
}
.forget-header p{
  font-size: 1rem;
} 



.forget-code-box {
  padding: 1rem 1rem;
  text-align: center;
  border-radius: 3px;
  width: 100%;
  background: rgba(255,255,255,0.6) !important;
  margin-top: 3.1rem;
  box-sizing: border-box;
}
.forget-code-box p {
  background: #f7f7f7;
  color: #cccccc;
  font-size: 0.85rem;
  position: relative;
  width: 100%;
  padding: 0 15px;
  border-radius: 5px;
  margin-bottom: 0.8rem;
  box-sizing: border-box;
}
.forget-code-active {
  position: absolute;
  right: 1.2rem;
  top: 0.75rem;
  width: auto;
  text-align: right;
  color: #049bff;
}
.forget-code-disabled{
  color:#aaa;
}
.forget-code-line .icon {
  position: absolute;
  left: 0.5rem;
  top: 0.6rem;
}
.icon-phone {
  background-image: url(../../public/img/i-phone.png);
}
.icon-code {
  background-image: url(../../public/img/i-dun.png);
}
.icon-psd {
  background-image: url(../../public/img/i-pwd.png);
}
.forget-code-line-input {
  padding: 0.6rem 0 0.6rem 0.9rem;
  height: 42px;
  width: 100%;
  font-size: 14px;
  background: none;
  border: none;
  color: #777;
  border-radius: 22px;
  box-sizing: border-box;
}
.forget-code-btn button{
  background-color: #049bff;
  background: linear-gradient(#049bffa8, #28a9ff7a);
  height: 42px;
  line-height: 42px;
  border: none;
  color: #fff;
  border-radius: 5px;
  width: 100%;
  font-size: 1rem;
}
.forget-forget {
  color: #666;
  display: block;
  font-size: 0.8rem;
  text-align: left;
}
.forget-forget a{
  color: #049bff;
  font-style: normal;
}
</style>