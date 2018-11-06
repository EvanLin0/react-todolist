/*
*配置文件
* 配置从 QQ音乐抓取数据时所需的公共参数(入参)，剩余的参数再调用时传入
* */

export const commonParams = {
  g_tk: 1928093487,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}

export const options = {
  param: 'jsonpCallback'
}

export const ERR_OK = 0
