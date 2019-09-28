<template>
  <div class="myaddress">
    <myheader message="/mine" what="收货地址"></myheader>
    <div class="myaddress-container classfix">
      <div class="sh-adress-box1" v-for="(item,i) in addressList" :key="i">
        <div class="sh-adress-box2">
          <span class="sh-adress-text1">{{item.name}}</span>
          <span class="sh-adress-text1 text-r">{{item.tel}}</span>
          <span class="sh-adress-text2">{{item.address1}} {{item.address2}}</span>
        </div>
        <div class="sh-adress-box3">
          <div class="sh-adress-text3">
            <input v-model="item.isChecked" class="address-input" type="checkbox">
            <span>设为默认地址</span>
          </div>
          <div class="sh-adress-text4">
            <a @click="delItem(i)" class="sh-adress-delete">
              删除
            </a>
            <a @click="notify" class="sh-adress-update">
              修改
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="sh-adress-add">
      <router-link to="/addadress">添加新地址</router-link>
    </div>
  </div>
</template>
<script>
import myheader from "../components/myheader"
export default {
  data() {
    return {
      addressList:[
        {name:"张三",tel:"186****9865",address1:"北京 北京市 通州区",address2:"经济技术开发区科创十街恺王服饰2号楼4楼401",isChecked:true},
        {name:"张三",tel:"186****9865",address1:"北京 北京市 通州区",address2:"经济技术开发区科创十街恺王服饰2号楼4楼401",isChecked:false},
        {name:"张三",tel:"186****9865",address1:"北京 北京市 通州区",address2:"经济技术开发区科创十街恺王服饰2号楼4楼401",isChecked:false},
      ]
    }
  },
  methods: {
    delItem(i){
      this.$dialog.confirm({
          message: "确认删除这条收货地址吗？",
      }).then(()=>{
        this.addressList.splice(i,1);
      }).catch(()=>{});
    },
    notify(){
      this.$notify({
        message: '该功能尚未完善',
        color: '#ad0000',
        background: '#ffe1e1'
      })
    }
  },
  components:{
    "myheader":myheader,
  }
}
</script>
<style>
.myaddress-container{
  margin-top: 3.1rem;
} 
.sh-adress-box1{
  width: 88%;
  float: left;
  margin-top: 5px;
  margin-left: 3%;
  background: #fff;
  padding: 0px 3%;
}
.sh-adress-box2 {
  width: 100%;
  float: left;
  padding: 12px 0px;
  border-bottom: 1px solid #F4F4F4;
}
.sh-adress-text1 {
  width: 50%;
  float: left;
  font-size: 15px;
}
.text-r {
  text-align: right;
}
.sh-adress-text1 {
  width: 50%;
  float: left;
  font-size: 15px;
}
.sh-adress-text2 {
  width: 100%;
  float: left;
  margin-top: 10px;
  font-size: 12px;
  color: #8A8A8A;
  line-height: 20px;
}
.sh-adress-box3 {
  width: 100%;
  float: left;
  height: 45px;
  line-height: 45px;
}
.sh-adress-text3 {
  width: 40%;
  height: 45px;
  float: left;
  background-size: 17%;
  font-size: 14px;
}
.address-input{
  margin-top: 10px !important;
} 
.sh-adress-text4{
  float: right;
  box-sizing: border-box;
}
.sh-adress-text4 a{
  padding:0.3rem;
  background: #fff; 
  border: 1px solid #FF9201;
  color: #FF9201;
  border-radius: 2px;
  margin-left: 0.3rem;
}

.sh-adress-add{
  width: 100%;
  padding: 5%;
  box-sizing: border-box;
}
.sh-adress-add a{
  display: block;
  height: 35px;
  line-height: 35px;
  border: 1px solid #FF9201;
  color: #FF9201;
  text-align: center;
  background: rgba(255,255,255,0);
  outline: none;
  border-radius: 3px;
  font-size: 1rem;
}
</style>