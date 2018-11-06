/*
* cnpm install jsonp --save-dev
* 然后使用新进简单的封装成 Promise
* 具体jsonp可查阅 github上面的文档再看下列的封装
* */
import originJSONP from 'jsonp'

export default function jsonp (url, data, option) {
  url+=(url.indexOf('?')<0?'?':'&') + param(data) // 针对返回的数据进行处理和url拼接
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data) // jsonp访问成功 resole
      } else {
        reject(err) // 错误 reject
      }
    })
  })
  // 针对返回的参数进行处理
  function param (data) {
    let url = ''
    for (var k in data) {
      let value = data[k] !== undefined?data[k]:''
      url += `&${k}=${encodeURIComponent(value)}`
    }
    return url?url.substring(1):''
  }
}
