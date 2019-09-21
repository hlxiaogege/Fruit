<template>
  <div>
    <div class="search-header classfix">
      <div class="left-arrow">
        <a href="javascript:;">
          <img src="../../public/img/leftarrow.png">
        </a>
      </div>
      <div class="center-input">
        <input placeholder="请输入关键词">
        <a href="javascript:;" class="search-camera">
          <img src="../../public/img/camera.png">
        </a>
      </div>
      <div class="right-btn">
        <button>搜索</button>
      </div>
    </div>
    <div class="search-content"></div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
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
</style>