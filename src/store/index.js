import Vue from 'vue'
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{ //数据源，
        classid:'0',
        navList:[],
        indexMenu:0,    //左侧默认菜单
    },
    getters:{   //相当于vue的计算属性
        getActivePage:function(state){
            return state.navList[classid];
        },
    },
    mutations:{ 
        //1.提交状态修改
        //2.必须是同步函数
        setPageIndex(state,n){
            state.classid=n;
        },
        setIndexMenu(state,n){
            state.indexMenu=n;
            //console.log(n);
        }
    },
    actions:{   
        //1.提交的是mutations
        //2.可以进行异步操作
        setPageIndex(context,n){
            context.commit('setPageIndex',n);
        },
        setIndexMenu(context,n){
            context.commit('setIndexMenu',n);
        }
    }
})