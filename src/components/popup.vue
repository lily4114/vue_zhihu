<template>
  <div class="popupBox">
      <!--正在加载--->
      <div v-show="val==2" class="loadingBox">
        <img src="../assets/loading.gif" alt="加载错误" width="120px">
      </div>
      <!---提示--->
      <div v-show="val==1">
        <p>{{msg}}</p>  
      </div>  
  </div>
</template>

<script>
export default {
    props:['val','msg'],
    created(){
      console.log('弹出框val：'+this.val)
    }
}
</script>

<style scoped>
    
</style>