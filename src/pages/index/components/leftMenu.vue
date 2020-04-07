<template>
    <ul class="leftMenu-wrapper"> 
        <li v-for="item in leftMenuList" :key="item.index" :class="indexMenu==item.index? 'active':'' " @click="selectMenu(item.index)">{{item.name}}</li>
    </ul>  
</template>

<script>
import api from '../../../api/index' 
export default {
    data(){
        return {
            leftMenuList:'',
            indexMenu:this.$store.state.indexMenu,
        }
    },
    computed:{
        
    },
    created(){
        this.leftMenuList=api.getLeftMenuList();
    },
    methods:{
        selectMenu(index){
            this.indexMenu=index;   
            this.$store.dispatch('setIndexMenu',this.indexMenu);        
        }
    }
}
</script>

<style scoped>
    .leftMenu-wrapper{
        width: 100%;
        height: 100vh;
        padding-top: 5%;
        border-right: 1px solid #ddd;
        box-sizing: border-box;
        overflow-y: scroll;
        background-color: #eee;
    }
    .leftMenu-wrapper li{
        font-size: 0.95rem;
        padding: 15% 2%;
    }
    .leftMenu-wrapper li.active{
        font-size: 1.23rem;
    }
</style>