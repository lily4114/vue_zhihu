<template>
  <div class="header-box">
      <div class="header-l">
          <div class="datetime">
              <span>{{day}}</span>
              <br>
              <span>{{month}}</span>
          </div>
          <h3>{{title}}</h3>
      </div>
      <div class="userHeader-box">
          <img src="../../../assets/title/01.jpg" alt="图片加载错误" width="68px">
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            month:4,
            day:7,
            title:'知乎日报',
            //userHeader:'../../../assets/title/01.jpg'
        }
    }
}
</script>

<style scoped>
    .header-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2% 0;
    }
    .userHeader-box{
        width: 30%;
    }
    .header-l{
        width: 70%;
        padding: 8% 0;
        display: flex;
        box-sizing: border-box;
    }
    .datetime{
        width: 25%;
        height: 100%;
        margin-right: 5%;
        border-right: 1px solid #ddd;
    }
</style>