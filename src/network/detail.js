import request from './request'

export function getDetailBanner(id) {

  return request({
    url: 'goods/detail/banner',
    params: {
      goodsId: id
    }
  })
}

export function getDetailBase(id) {

  return request({
    url: 'goods/detail/base',
    params: {
      goodsId: id
    }
  })
}


export function goodsShopInfo(id) {
  return request({
    url: 'goods/detail/shop',
    params: {
      goodsId: id
    }
  })
}

export function goodsDetailImage(id) {
  return request({
    url: 'goods/detail/image',
    params: {
      goodsId: id
    }
  })
}
export function goodsDetailParams(id) {
  return request({
    url: 'goods/detail/params',
    params: {
      goodsId: id
    }
  })
}

export function goodsDetailComment(id) {
  return request({
    url: 'goods/detail/comment',
    params: {
      goodsId: id
    }
  })
}
export function recommendList(id) {
  return request({
    url: 'goods/detail/recommend',
    params: {
      goodsId: id
    }
  })
}

export function addGoodsCart(id) {
  return request({
    url: 'goods/cart/add',
    params: {
      goodsId: id
    }
  })
}

export function cartCount() {
  return request({
    url: 'goods/cart/num',

  })
}


export function cartInfo() {
  return request({
    url: 'goods/cart/info',

  })
}



export class Goods {
  constructor() {

  }

}


// export class Goods {
// 	constructor(itemInfo, columns, shopInfo) {
// 	    this.title = itemInfo.title;
// 		this.price = itemInfo.price;
// 		this.oldPrice = itemInfo.oldPrice;
// 		this.lowNowPrice = itemInfo.lowNowPrice;
// 		this.discountDesc = itemInfo.discountDesc;
// 		this.columns = columns;
// 		this.services = shopInfo.services;
// 	}
// }
