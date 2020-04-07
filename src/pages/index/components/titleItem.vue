<template>
  <div class="title-item" >
    <div class="item-l">
      <p class="title">{{item.title}}</p>
      <p class="details">{{from}}.{{time}}</p>
    </div>
    <div class="item-r">
      <img src="../../../assets/title/05.jpg" alt="图片加载错误" width="100%">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title:'股市和经济是怎样的一种关系？',
      from:'密保的包',
      time:'5分钟阅读'
    }
  },
  props:['item'],
  methods:{
    
  }
}
</script>

<style scoped>
  .title-item{
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }
  .item-l{
    width: 70%;
    padding-right: 5%;
  }
  .item-r{
    width: 30%;
  }
</style>