<template>
  <div class="Mine-setting">
    <myheader message="/mine"></myheader>
    <div class="mine-setting-box">
      <div class="mine-setting-list1">
        <a href="javascript:;">
          <span>安全设置</span>
          <div>
            <span class="last-span">手机号、密码</span>
            <img src="../../public/img/arrow-right.png" alt="">
          </div>
        </a>
        <a href="javascript:;">
          <span>生物识别</span>
          <div>
            <span class="last-span">人脸、指纹、声纹</span>
            <img src="../../public/img/arrow-right.png" alt="">
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import myheader from "../components/myheader"
export default {
  data() {
    return {
      toWhere:"/mine-setting"
    }
  },
  components:{
    "myheader":myheader,
  }
}
</script>
<style>
.Mine-setting{
  background: #f8f8f8;
  width: 100%;
  height: 100vmax;
}
/* 第一组 */
.mine-setting-box{
  padding-top:3.1rem;
  /* margin-top: 3.1rem; */
}
.mine-setting-list1{
  margin-top: 0.8rem;
  background: #fff;
  border-top: 1px solid #f2f2f2;
}
.mine-setting-list1 a{
  padding:0.6rem 0.8rem;
  display: block;
  font-size: 0.95rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f2f2f2;
}
.mine-setting-list1 a img{
  width: 1.5rem;
  float: right;
}
.last-span{
  color:#aaa;
  display: inline-block;
  font-size: 0.8rem;
  margin-top: 0.2rem;
}
</style>