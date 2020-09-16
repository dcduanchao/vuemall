<template>
  <div id="detail">
    <goods-detail-nav class="detail-nav" @titleClick='titleClick' ref="detailNav"></goods-detail-nav>
    <scroll class="content" ref="scroll" :probe-type="3" @scollPos="scollPos">
      <detail-banner :top-image='topImage'></detail-banner>
      <detail-base-info :goods="goods"> </detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imgLoad='imgLoad'></detail-goods-info>
      <detail-param-info :param-info="paramInfo" ref="paramInfo"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="detailCommentInfo"></detail-comment-info>
      <goods-list :goods='recommend' ref="goodsList"></goods-list>

    </scroll>
    <detail-botton @addCart='addCart'></detail-botton>
    <back-top v-show="isShowBackTop" @click.native="backClick"></back-top>
  </div>
</template>

<script>
import GoodsDetailNav from './childDetail/GiidsDetailNav';
import DetailBanner from './childDetail/DetailBanner';
import DetailBaseInfo from './childDetail/DetailBaseInfo';
import DetailShopInfo from './childDetail/DetailShopInfo';
import DetailGoodsInfo from './childDetail/DetailGoodsInfo';
import DetailParamInfo from './childDetail/DetailParamInfo';
import DetailCommentInfo from './childDetail/DetailCommentInfo';
import DetailBotton from './childDetail/DetailBotton';

import GoodsList from 'components/content/goods/GoodsList';
import BackTop from 'components/content/backtop/BackTop';

import Scroll from 'components/common/scroll/Scroll';

import { itemListerMixin } from 'common/mixin';
import { debounce } from 'common/utils';

import {
  getDetailBanner,
  getDetailBase,
  goodsShopInfo,
  goodsDetailImage,
  goodsDetailParams,
  goodsDetailComment,
  recommendList,
  addGoodsCart,
} from 'network/detail';
export default {
  name: 'GoodsDetail',
  data() {
    return {
      id: null,
      topImage: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: [],
      recommend: [],
      themeTopyS: 0,
      themeTopY: [],
      getThemeTopY: null,
      isShowBackTop: false,
    };
  },
  mixins: [itemListerMixin],
  created() {
    this.id = this.$route.params.id;
    this.getDetailBannerData(this.id);
    this.getGoodDesc(this.id);
    this.getGoodsShopInfo(this.id);
    this.getGoodsDetailImage(this.id);
    this.getGoodsDetailParams(this.id);
    this.getGoodsDetailComment(this.id);
    this.getRecommendList(this.id);

    this.getThemeTopY = debounce(() => {
      this.themeTopY = [];
      this.themeTopY.push(0);
      this.themeTopY.push(this.$refs.paramInfo.$el.offsetTop);
      this.themeTopY.push(this.$refs.detailCommentInfo.$el.offsetTop);
      this.themeTopY.push(this.$refs.goodsList.$el.offsetTop);
    }, 100);
  },
  mounted() {},
  components: {
    GoodsDetailNav,
    DetailBanner,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBotton,
    BackTop,
  },

  destroyed() {
    this.$bus.$off('itemLoadImage', this.itemImgListener);
  },

  methods: {
    getDetailBannerData(id) {
      getDetailBanner(id).then((res) => {
        this.topImage = res.data.topImage;
      });
    },

    getGoodDesc(id) {
      getDetailBase(id).then((res) => {
        this.goods = res.data;
      });
    },
    getGoodsShopInfo(id) {
      goodsShopInfo(id).then((res) => {
        this.shop = res.data;
      });
    },
    getGoodsDetailImage(id) {
      goodsDetailImage(id).then((res) => {
        this.detailInfo = res.data;
      });
    },
    getGoodsDetailParams(id) {
      goodsDetailParams(id).then((res) => {
        this.paramInfo = res.data;
      });
    },
    getGoodsDetailComment(id) {
      goodsDetailComment(id).then((res) => {
        this.commentInfo = res.data;
      });
    },
    getRecommendList(id) {
      recommendList(id).then((res) => {
        this.recommend = res.data.list;
      });
    },

    backClick() {
      this.$refs.scroll.backClick(0, 0, 300);
    },
    addCart() {
      console.log('购物车');
      addGoodsCart(this.id).then(() => {
        confirm('成功');
      });
    },

    imgLoad() {
      this.$refs.scroll && this.$refs.scroll.scrollRefresh();
      this.getThemeTopY();
    },

    titleClick(index) {
      // //跳转第一种 自己写的
      // switch (index) {
      //   case 0:
      //     this.themeTopyS = 0;
      //     break;
      //   case 1:
      //     this.themeTopyS = this.$refs.paramInfo.$el.offsetTop;
      //     break;
      //   case 2:
      //     this.themeTopyS = this.$refs.detailCommentInfo.$el.offsetTop;
      //     break;
      //   case 3:
      //     this.themeTopyS = this.$refs.goodsList.$el.offsetTop;
      //     break;
      // }

      // this.$refs.scroll && this.$refs.scroll.scrollTo(0, -this.themeTopyS, 100);
      this.$refs.scroll &&
        this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 100);
    },

    scollPos(pos) {
      let y = Math.abs(pos.y);

      if (y > 500) {
        this.isShowBackTop = true;
      } else {
        this.isShowBackTop = false;
      }
      if (y < this.themeTopY[1]) {
        this.$refs.detailNav.currntIndex = 0;
      } else if (y < this.themeTopY[2]) {
        this.$refs.detailNav.currntIndex = 1;
      } else if (y < this.themeTopY[3]) {
        this.$refs.detailNav.currntIndex = 2;
      } else {
        this.$refs.detailNav.currntIndex = 3;
      }
    },
  },
};
</script>

<style  scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>