<template>
  <div>
    <nav-bar class="nav-home">
      <div slot="center">购物街</div>
    </nav-bar>

    <home-swiper :banner='banner'></home-swiper>

    <recommend-view :recommend="recommend"></recommend-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from './childcomps/HomeSwiper';
import RecommendView from './childcomps/RecommendView';

import { gethomeMultidata } from 'network/home';

export default {
  name: 'Home',

  data() {
    return {
      banner: [],
      recommend: [],
    };
  },
  created() {
    gethomeMultidata().then((res) => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  },
  components: {
    NavBar,
    RecommendView,
    HomeSwiper,
  },
};
</script>

<style >
.nav-home {
  /* base.js 用法 */
  background-color: var(--color-tint);
  color: var(--color-background);
}
</style>