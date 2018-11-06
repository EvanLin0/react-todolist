import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home';// 主页
import News from '@/components/News'; // 新闻页
import Content from '@/components/Content';// 内容


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/news',
      name:'News',
      component:News
    },
    {
      path:'/content',
      name:'Content',
      component:Content
    }
  ]
})
