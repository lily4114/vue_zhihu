<template>
  <div class="wrapper">
    <left-menu class="left-menu"></left-menu>
    <right-title class="right-title"></right-title>
  </div>
</template>

<script>
import leftMenu from './components/leftMenu';
import rightTitle from './components/rightTitle';
export default {
  data () {
    return {
      
    }
  },
  beforeCreate(){ //事件数据初始化之前
   
  },
  created(){
    
  },
  mounted(){
   
  },
  methods:{
    
  },
  components:{
    leftMenu,
    rightTitle,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.wrapper{
  display: flex;
  height: 100vh;
}
.wrapper .left-menu{
  width: 30%;
}
.wrapper .right-title{
  width: 70%;
}
</style>
