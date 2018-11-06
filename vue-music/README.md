# vue-music

> vue音乐播放器demo

## Build Setup

``` bash
# install dependencies
npm install || cnpm install

# serve with hot reload at localhost:8080
npm run dev || npm start

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
###项目结构说明
####**1.src目录说明**
>api目录:主要用于存放请求数据的抓取,方法封装存放的文件夹
   >> config.js封装了用于请求的公共参数。用于jsonp请求(个别jsonp请求详见webpack.dev.config.js中的配置)
   >> recommend.js是用于请求 recommend.vue文件渲染的封装。




###项目须知
#####**1.首页轮播图是利用jsonp请求QQ音乐的地址进行数据的抓取.**
   1. >具体可以打开QQ音乐，浏览器F12 network中，name为fcg_开头的资源的Request URL
      >>地址：https://y.qq.com/m/index.html
   2. >   ![](./README/image/1.png 'QQ数据抓取详情')
   3. > 部分jsonp请求，别人的服务器会校验 request headers中的 host referer，详见 webpack.dev.conf.js中的配置。
   
#####**2.**

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
