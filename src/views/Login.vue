<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-logo">
        <div class="login-logo-box">
          <img src="../../public/img/logo.jpg">
        </div>
        <h2>欢迎登录</h2>
      </div>
     <form action="">
        <div class="login-input-box">
          <i class="icon icon-phone"></i>
          <input placeholder="请输入手机号">
        </div>
        <div class="login-input-box">
          <i class="icon icon-psd"></i>
          <input type="password" placeholder="请输入密码号">
        </div>
        <div class="login-input-btn">
          <button>登录</button>
        </div>
        <div class="login-input-other">
          <router-link to="/forget">忘记密码？</router-link>
          <router-link to="/reg">立即注册</router-link>
        </div>
     </form>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.login-container{
  background: url("../../public/img/bg10.png");
  width: 100%;
  min-height: 100vh;
  background-size: 100%;
  /* filter:blur(30px); */
}
.login-box{
  position: fixed;
  top: 15%;
  left: 5%;
  width: 90%;
  padding:5%;
  height: 65%;
  text-align: center;
  background: rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
}
.login-logo{
  margin-bottom: 1rem;
}
.login-logo h2{
  font-size: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #fff;
}
.login-logo-box{
  width: 75px;
  height: 75px;
  margin: 0 auto;
  border-radius: 10px;
}
.login-logo-box img{
  width: 100%;
}
.login-input-box{
  background-color: rgba(232, 240, 254);
  border-radius: 1.4rem;
  background: #f7f7f7;
  color: #cccccc;
  font-size: 0.85rem;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.95rem;
  margin-bottom: 0.8rem;
}
.login-input-box input{
  padding: 0.6rem 0 0.6rem 0.9rem;
  height: 2.625rem;
  width: 100%;
  font-size: 0.875rem;
  background: none;
  box-sizing: border-box;
  border: none;
  color: #777;
  border-radius: 1.35rem;
}
.login-input-box .icon{
  position: absolute;
  left: 0.5rem;
  top: 0.6rem;
}
.icon{
  width: 1.25rem;
  height: 1.25rem;
  display: block;
  border: none;
  float: left;
  background-size: 1.25rem;
  background-repeat: no-repeat;
}
.icon-phone{
  background-image: url(../../public/img/i-phone.png);
}
.icon-psd{
  background-image: url(../../public/img/i-pwd.png);
}
.login-input-btn{
  padding: 1rem 0 0.5rem 0;
}
.login-input-btn button{
  width: 100%;
  height: 2.6rem;
  line-height: 2.6rem;
  font-size: 1rem;
  border: none;
  color: #fff;
  background: #999;
  border-radius: 1.3rem;
  box-shadow: 0 0 2px #333;
}
.login-input-other{
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
}
.login-input-other a{
  color: #666;
  font-size: 0.8rem;
}
</style">