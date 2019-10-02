<template>
  <div>
    <myheader message="/service" what="物流问题"></myheader>
    <div class="problem-container">
      <van-collapse v-model="activeNames">
        <van-collapse-item title="爱鲜蜂配送时间？" name="1">
          9：00-次日02：00，晚间营业时间以当前地址的商户营业时间为准。
        </van-collapse-item>
        <van-collapse-item title="爱鲜蜂客服服务时间？" name="2">
          爱鲜蜂人工客服服务时间是9：00-24:00，智能客服的服务时间是7X24小时。
        </van-collapse-item>
        <van-collapse-item title="可配送哪些城市？" name="3">
            爱鲜蜂已在北京、上海、天津、广州、佛山、深圳、廊坊、南京、苏州、西安、成都、杭州、三河13个城市开通配送服务，其他城市将会陆续开通，敬请关注。
        </van-collapse-item>
        <van-collapse-item title="如何在爱鲜蜂下单购买商品？" name="4">
          <p>
            1)打开爱鲜蜂APP客户端；或者进入“爱鲜蜂”服务号点击“我要下单”；选择商品，加入购物车；
          </p>
          <p>
            2)  进入购物车页面，选择收货地址、收货时间、确认商品数量等信息，点击【选好了】；
          </p>
          <p>
            3)  进入订单结算页，选择优惠券、支付方式，确认付款金额，点击【确认付款】完成下单。
          </p>
        </van-collapse-item>
        <van-collapse-item title="如何新增、编辑和删除收货地址？" name="5">
          <p>
            通过以下方式进入收货地址页，点击地址旁边的编辑功能可编辑或删除当前地址；点击页面下方的【新增地址】可添加收货地址。
          </p>
          <p>
            方式1：在首页点击顶部的【配送至：XXX】进入收货地址页；
          </p>
          <p>
            方式2：在首页底部点击【我的】，再点击【我的收货地址】进入收货地址页；
          </p>
          <p>
            方式3：选择商品后在购物车页，点击地址进入收货地址页。
          </p>
        </van-collapse-item>
        <van-collapse-item title="什么是“鲜蜂精选”商品？" name="6">
            在商品名称前面显示“精选”二字标签的商品都是“鲜蜂精选”商品。
        </van-collapse-item>
        <van-collapse-item title="退款流程" name="7">
          <p>
            1)  进入订单详情，点击下方的【申请退款】，爱鲜蜂客服审核通过后会短信通知您；
          </p>
          <p>
            2)  退款时间说明： 爱鲜蜂会在48小时内自动退款，按原支付方式退回，2-15个工作日内到账。
          </p>
          <p>
            如果未及时收到退款，请您与第三方支付平台联系核实：
          </p>
          <p>
            微信支付：请您登陆财付通，进入“钱包-交易记录”或联系财付通客服查询退款；
          </p>
          <p>
            支付宝支付：请您登陆支付宝，进入“账单”或联系支付宝客服查询退款；
          </p>
          <p>
            QQ钱包支付：请您登陆QQ钱包，进入“个人中心-交易记录“或联系QQ钱包客服查询退款。
          </p>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>
<script>
import myheader from '../components/myheader'
export default {
  data() {
    return {
      activeNames: []
    }
  },
  components:{
    "myheader":myheader
  }
}
</script>
<style>
.problem-container{
  margin-top: 3.1rem;
}

</style>