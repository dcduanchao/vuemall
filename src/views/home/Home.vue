<template>
  <div id='home'>
    <nav-bar class="nav-home">
      <div slot="center">购物街</div>
    </nav-bar>

    <scroll class="home-content" ref="scroll" :probe-type="3" @scollPos="scollPos" :pull-up-load='true' @scrollPullUp='scrollPullUp'>

      <home-swiper :banner='banner'></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view></feature-view>
      <!-- @tabClick 监听组件点击 -->
      <tab-controller class="tab-controller" :titles='tabTitles' @tabClick='tabClick'></tab-controller>
      <goods-list :goods="showGoods"></goods-list>

    </scroll>
    <!-- 组件件套加native -->
    <back-top v-show="isShowBackTop" @click.native="backClick"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import TabController from 'components/content/tabcontroller/TabController';
import GoodsList from 'components/content/goods/GoodsList';
import Scroll from 'components/common/scroll/Scroll';
import BackTop from 'components/content/backtop/BackTop';

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
      isShowBackTop: false,
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
        this.goods[type].page = page;
        this.goods[type].list.push(...res.data.list);
      });
    },

    backClick() {
      this.$refs.scroll.backClick(0, 48, 300);
    },
    scollPos(pos) {
      let y = pos.y;
      if (Math.abs(y) > 500) {
        this.isShowBackTop = true;
      } else {
        this.isShowBackTop = false;
      }
    },
    scrollPullUp() {
      console.log('111111');
      this.getHomeGoods(this.currenttype);
      this.$refs.scroll.finishPullUp();
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
    Scroll,
    BackTop,
  },
};
</script>

<style scoped>
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
.home-content {
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
  position: absolute;
  /* 
  height: 500px;
  overflow: hidden; */
}
</style>