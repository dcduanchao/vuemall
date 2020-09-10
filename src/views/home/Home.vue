<template>
  <div id='home'>
    <nav-bar class="nav-home">
      <div slot="center">购物街</div>
    </nav-bar>

    <home-swiper :banner='banner'></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    <feature-view></feature-view>
    <!-- @tabClick 监听组件点击 -->
    <tab-controller class="tab-controller" :titles='tabTitles' @tabClick='tabClick'></tab-controller>

    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import TabController from 'components/content/tabcontroller/TabController';
import GoodsList from 'components/content/goods/GoodsList';

import HomeSwiper from './childcomps/HomeSwiper';
import RecommendView from './childcomps/RecommendView';
import FeatureView from './childcomps/FeatureView';

import { gethomeMultidata, getHomeGoods } from 'network/home';

export default {
  name: 'Home',

  data() {
    return {
      banner: [],
      recommend: [],
      tabTitles: ['流行', '新款', '精选'],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currenttype: 'pop',
    };
  },
  created() {
    this.gethomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('news');
    this.getHomeGoods('sell');
  },
  computed: {
    showGoods() {
      return this.goods[this.currenttype].list;
    },
  },
  methods: {
    gethomeMultidata() {
      gethomeMultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].page = page;
        this.goods[type].list.push(...res.data.list);
      });
    },

    //事件监听
    tabClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currenttype = 'pop';
          break;
        case 1:
          this.currenttype = 'news';
          break;
        case 2:
          this.currenttype = 'sell';
          break;

        default:
          break;
      }
    },
  },
  components: {
    NavBar,
    TabController,
    GoodsList,
    RecommendView,
    HomeSwiper,
    FeatureView,
  },
};
</script>

<style >
#home {
  padding-top: 44px;
}
.nav-home {
  /* base.js 用法 */
  background-color: var(--color-tint);
  color: var(--color-background);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-controller {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
</style>