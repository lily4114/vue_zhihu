<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      
    }
  },
  methods:{
    
  },
  components:{
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /****自定义样式 */
  width:100%;
  height:100%;
  margin: 0;
  padding: 0;
  font-size: 16px;
}
</style>
