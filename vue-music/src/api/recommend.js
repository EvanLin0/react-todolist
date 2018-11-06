/*
* 在recommend.vue中使用该文件进行数据的抓取渲染
* */
import jsonp from 'common/js/jsonp'  // 引入封装好的jsonp
import {commonParams,options} from './config' // 引入封装的 jsonp 所需的参数封装js文件
import axios from 'axios'
/*
*地址
* https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1541257569488
* */
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}
export function getDiscList () {
  const url = '/api/getDiscList';
  const data = Object.assign({},commonParams,{
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId:10000000,
    rnd:Math.random(),
    format:'json'
  });
  return axios.get(url,{
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
