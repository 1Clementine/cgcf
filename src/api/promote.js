import request from '@/utils/request'

// 获取卡组
export function getList() {
  return request(({
    url: '/promotion/all',
    method: 'get'//从服务器查询请求
  }))
}