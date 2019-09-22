<template>
  <div>
    <div class="search-header classfix">
      <div class="left-arrow">
        <router-link to="/">
          <img src="../../public/img/leftarrow.png">
        </router-link>
      </div>
      <div class="center-input">
        <input placeholder="请输入关键词" v-model="value"  @keydown.enter="submit">
        <a href="javascript:;" class="search-camera">
          <img src="../../public/img/camera.png">
        </a>
      </div>
      <div class="right-btn">
        <button @click="submit">搜索</button>
      </div>
    </div>
    <div class="search-history">
      <h1>
        <span>历史搜索</span>
        <a  @click="clearHistory" href="javascript:;" class="search-delete">
          <img src="../../public/img/delete.png">
        </a>
      </h1>
      <div class="search-content">
        <a v-for="(item,index) in historylist" :key="index" href="javascript:;" @click="notify">{{item}}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value:"",
      historylist:[],
    }
  },
  methods: {
    submit(){
      this.historylist.unshift(this.value);
      this.value="";
    },
    clearHistory(){
      this.$dialog.confirm({
          message: "确认删除全部历史记录吗？",
      }).then(()=>{
        this.historylist=[];
      }).catch(()=>{});
    },
    notify(){
      this.$notify({
        message: '该功能尚未完善',
        color: '#ad0000',
        background: '#ffe1e1'
      })
    }
  }
}
</script>
<style>
/* 搜索框 */
.search-header{
  background: #f6f6f6;
  padding: 0.8rem 0.3rem;
  display: flex;
  justify-content: space-between;
}
.search-header .left-arrow{
  width: 1.2rem;
  height: 1.2rem;
  margin-top: 0.25rem;
}
.search-header .left-arrow img{
  display: block;
  width: 100%;
}
.search-header .center-input{
  width: 65%;
  position: relative;
}
.search-header .center-input input{
  width: 100%;
  background: #fff;
  border: none;
  box-sizing: border-box;
  font-size: 0.8rem;
  text-align: left;
  height: 31px;
  border-radius: 22px;
  padding: 0.3rem 1.5rem 0.3rem 0.4rem;
}
.center-input .search-camera{
  width: 1.2rem;height: 1.2rem;
  position: absolute;
  top: 0.3rem;right: 0.3rem;
}
.center-input .search-camera img{
  width: 100%;
}
.right-btn{
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.right-btn button{
  width: 100%;
  display: block;
  text-align: center;
  border: none;
  color: #333;
  font-size: 1rem;
  background: transparent;
}
/* 主体历史记录 */
.search-history{
  padding: 0.8rem;
}
.search-history h1{
  color:#000;
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
}
.search-history h1 a{
  display: block;
  width: 1.2rem;
}
.search-history h1 a img{
  width: 100%;
}
.search-content{
  display: flex;
  flex-wrap: wrap;
}
.search-content a{
  display: block;
  padding: 0.5rem;
  border-radius:40px;
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
  background: #f6f6f6; 
}

</style>