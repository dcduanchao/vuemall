import request from './request'

export function gethomeMultidata(params) {

  return request({
    url: '/home/multidata'
  })
}


export function getHomeGoods(type, page) {

  return request({
    url: '/home/goods/data',
    params: {
      type,
      page,
      pageSize: 30
    }
  })

}