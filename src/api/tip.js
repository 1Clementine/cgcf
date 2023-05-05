import request from '@/utils/request'//引入request中axios对象

export function getTodayTip() {
  return request({
    url: '/tip/today',
    method: 'get'//从服务器查询请求
  })
}