// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick' // 引入移动端点击300毫秒点击延迟处理的fastclick
import 'common/stylus/index.styl' // 引入全局样式
import VueAwesomeSwiper from 'vue-awesome-swiper'// 使用vue-awesome-swiper轮播图
import 'swiper/dist/css/swiper.css'// 使用样式
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false

FastClick.attach(document.body) // 在body中按钮在点击时禁止300毫秒延迟
Vue.use(VueAwesomeSwiper)// 使用vue-awesome-swiper
Vue.prototype.axios = axios
Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
