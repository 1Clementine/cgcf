import request from '@/utils/request'//引入请求工具

export function getBillboard() {
  return request({
    url: '/billboard/show',//对应后端中billboard的show
    method: 'get'
  })
}