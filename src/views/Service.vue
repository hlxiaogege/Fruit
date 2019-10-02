<template>
  <div class="service">
    <myheader message="/mine" what="客服反馈"></myheader>
    <div class="service-continaer">
      <div class="service-box">
        <a href="javascript:;">
          <span class="service-box-img">
            <img src="../../public/img/news-centerimg2.png">
          </span>
          <div class="service-info">
            <div class="service-info-up">
              <span>客服助手</span>
              <span>19-06-06</span>
            </div>
            <div class="service-info-down">
              <span>在线客服咨询时间为9:00-20:00</span>
              <span class="info-point"></span>
            </div>
          </div>
        </a>
        <router-link to="/problem">
          <span class="service-box-img">
            <img src="../../public/img/news-centerimg1.png">
          </span>
          <div class="service-info">
            <div class="service-info-up">
              <span>常见问题</span>
              <span>19-06-06</span>
            </div>
            <div class="service-info-down">
              <span>配送时间、优惠券和退款流程 ！</span>
              <span class="info-point"></span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import myheader from "../components/myheader"
export default {
  data() {
    return {
      
    }
  },
  components:{
    "myheader":myheader,
  }
}
</script>
<style>
.service-continaer{
  margin-top: 3.1rem;
}
.service-box a{
  width: 94%;
  border-bottom: 1px solid #F1F1F1;
  padding: 1rem 3%;
  background: #fff;
  display: flex;
  justify-content: space-between;
}
.service-box-img{
  width: 2.5rem;
  height: 2.5rem;
  margin-top: 5px;
}
.service-box-img img{
  width: 100%;
}
.service-info{
  width: 80%;
}
.service-info>div{
  display: flex;
  justify-content: space-between;
}
.service-info>div span{
  line-height: 1.25rem;
  margin-top: 5px;
}
.service-info .service-info-up span:first-child{
  font-size: 1rem;
}
.service-info .service-info-down span:first-child{
  width: 90%;
  height: 1.25;
  line-height: 1.125rem;
  margin-top: 5px;
  font-size: 0.85rem;
  color: #B8B8B8;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.service-info .service-info-down .info-point{
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: #ff4a54;
  margin-top: 0.5rem;
}
</style>