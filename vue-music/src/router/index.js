import Vue from 'vue'
import Router from 'vue-router'
// 引入组件配置路由
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    { // 主页路由重定向
      path: '/',
      redirect: '/recommend' // redirect 路由重定向，当路由是主页 / 的时候重定向到 /recommend路由页面
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
