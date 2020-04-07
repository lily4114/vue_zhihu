import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index/index'
import article from '../pages/article/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index',
    },
    {
      path: '/index',      
      name: 'index',
      component: index,
      // children:[  //子路由需要添加<router-view>视图
      //   {
      //     path:'search',
      //     name:'search',
      //     component:search
      //   },
      // ]
    },
    {
      path: '/article',      
      name: 'article',
      component: article,
    },
  ]
})
