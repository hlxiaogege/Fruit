<template>
  <div class="reg-container">
    <div class="reg-header">
      <a @click="giveup">
        <img src="../../public/img/arrow-left2.png" alt="">
      </a>
      <p>欢迎注册</p>
     </div>
    <div class="reg-code-box">
      <form action="">
        <p class="reg-code-line">
          <i class="icon icon-phone"></i>
          <input v-model="uname" class="reg-code-line-input" placeholder="请输入手机号码">
        </p>
        <p class="reg-code-line">
          <i class="icon icon-psd"></i>
          <input v-model="upwd" type="password" class="reg-code-line-input" placeholder="请输入密码">
        </p>
        <p class="reg-code-line">
          <i class="icon icon-psd"></i>
          <input v-model="rpwd" type="password" class="reg-code-line-input" placeholder="请再次输入密码">
        </p>
        <p class="reg-code-line">
          <i class="icon icon-code"></i>
          <input v-model="code1" class="reg-code-line-input" placeholder="输入验证码">
          <a href="javascript:;"  @click="startTimer" class="reg-code-active" :class="{'reg-code-disabled':time<60}">
            {{time==60?"获取验证码":`${time}s后重新发送`}}
          </a>
        </p>
        <p class="reg-code-line">
          <i class="icon icon-img"></i>
          <input  v-model="code2" class="reg-code-line-input" placeholder="输入验证码">
          <a href="javascript:;" class="reg-code-active">
            <img src="../../public/img/code.png">
          </a>
        </p>
        <div class="reg-code-btn">
          <button @click="reg">立即注册</button>
        </div>
        <div class="reg-forget">
          已有账号,
          <router-link to="/login">前往登录</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time:60,
      timer:null,
      uname:"",
      upwd:"",
      rpwd:"",
      code1:"",
      code2:""
    }
  },
  methods: {
    reg(){
      var reg=/^1[3-9]\d{9}$/;
      var uname=this.uname;
      var upwd=this.upwd;
      if(this.uname==""){
        this.$toast("手机号不能为空")
        return
      }else if(!reg.test(this.uname)){
        this.$toast("请输入正确的手机号")
        return
      }else{
        var url="regphone";
        this.axios.get(url,{params:{uname}}).then(res=>{
          if(res.data.code==1){
            this.$toast("手机号已存在，不可使用")
            return
          }
        }).catch(err=>{})
      }
      if(this.upwd==""){
        this.$toast("密码不能为空")
        return
      }
      if(this.rpwd==""||this.rpwd!=this.upwd){
        this.$toast("两次输入密码不一致")
        return
      }
      if(this.code1==""||this.code2==""){
        this.$toast("验证码不能为空")
        return
      }
      this.axios.get("reg",{
        params:{
          uname,upwd
        }
      }).then(res=>{
        if(res.data.code==1){
          this.$toast("注册成功");
          setTimeout(()=>{
            this.$router.push("/login");
          },2000)
        }else{
          this.$toast("注册失败，请重试");
        }
      }).catch(err=>{})
    },
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
    giveup(){
      this.$dialog.confirm({
          message: "是否放弃注册吗？",
      }).then(()=>{
        this.$router.push("/login");
      }).catch(()=>{});
    }
  },
}
</script>
<style>
.reg-container{
  background:#fff;
  width: 100%;
  height: 100%;
} 
.reg-header{
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  box-sizing: border-box;
  padding: 0.8rem 1rem;
  background: #fff;
  text-align: center;
}
.reg-header a{
  float: left;
}
.reg-header a img{
  width: 1.2rem;
}
.reg-header p{
  font-size: 1rem;
} 
 /* 头 */
.reg-code-box {
  padding: 1rem 1rem;
  text-align: center;
  border-radius: 3px;
  width: 100%;
  background: rgba(255,255,255,0.6) !important;
  margin-top: 3.1rem;
  box-sizing: border-box;
}
.reg-code-box p {
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
.reg-code-active {
  position: absolute;
  right: 1.2rem;
  top: 0.75rem;
  width: auto;
  text-align: right;
  color: #049bff;
}
.reg-code-active img {
  width: 60px;
  margin-top: -0.28rem;
}
.reg-code-active {
  position: absolute;
  right: 1.2rem;
  top: 0.75rem;
  width: auto;
  text-align: right;
  color: #049bff;
}
.reg-code-disabled{
  color: #aaa;
}
.reg-code-line .icon {
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
.icon-img {
  background-image: url(../../public/img/i-img.png);
}
.reg-code-line-input {
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
.reg-code-btn button{
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
.reg-forget {
  color: #666;
  display: block;
  font-size: 0.8rem;
  text-align: left;
}
.reg-forget a{
  color: #049bff;
  font-style: normal;
}
</style>