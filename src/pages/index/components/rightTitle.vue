<template>
  <div class="rightTitle-box">
      <!--正在加载-->
      <div v-show="isLoading">
          <my-loading></my-loading>
      </div>
      <div v-show="!isLoading">
        <right-title-header></right-title-header>
        <div class="right-title-content" >
            <p class="datetime" v-show="showDate">{{datetime}}</p>
            <div v-for="item in rightTitleList" :key="item.index" @click="intoArticle(item.articleId)">
                <title-item :item='item'></title-item>
            </div>            
        </div>     
        
      </div>
      <!-- <p style="font-size:0.8rem">已经到底了~</p> -->
  </div>
</template>

<script>
import api from '../../../api/index';
import rightTitleHeader from './rightTitleHeader';
import titleItem from './titleItem'
export default {
    data(){
        return{
            isLoading:true,
            rightTitleList:[],
            showDate:true,
            datetime:'4月5日',
        }
    },
    computed:{
        getDateTime(n){

        },
        indexMenu(){
            return this.$store.state.indexMenu;
        }
    },
    watch:{
        indexMenu(val){
            this.getTitle(val);
        }
    },
    created(){
        this.getTitle(0);
    },
    mounted(){
        
    },
    methods:{
        getTitle(n){
            this.isLoading=false;
            this.rightTitleList=api.getRightTitle(n);
            
        },
        intoArticle(articleId){
            this.$router.push('/article');
        },
        test(){
            console.log(123);
        }
    },
    components:{
        titleItem,
        rightTitleHeader,
    }

}
</script>

<style scoped>
    .rightTitle-box{
        /* padding: 2% 0; */
        /* height: 100vh; */
        overflow-y: scroll;
        box-sizing: border-box;
    }
    .rightTitle-box .datetime{
        padding: 3% 0;
    }
    /* .rightTitle-wrapper {
        padding: 7% 4%;
        display: flex;
        align-items: center;
    }
    .rightTitle-wrapper ~div{
        border-top:1px solid #eee;
    }
    .rightTitle-wrapper .title{
        width: 80%;
        text-align: left;
        font-family:'STSong';
        font-size: 1rem;
        padding-left: 4%;
        letter-spacing: 0.5px;
    } */
</style>