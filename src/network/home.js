import request from './request'

export function gethomeMultidata(params) {

  return request({
    url: '/home/multidata'
  })

}