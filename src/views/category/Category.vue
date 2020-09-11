<template>
  <div>
    <div> 我是分类</div>

    <div class='wrapper' ref="wrapper1">
      <div>
        <!-- <ul>
          <li>aaa</li>
          <li>aaa</li>
          <li>aaa</li>
          <li>aaa</li>
          <li>aaa</li>
          <li>aaa</li>
          <li>aaa</li>
          <li>aaa</li>
          <li>aaa</li>
          <li>aaa</li>
          <li>aaa</li>
          <li>aaa</li>
          <li>aaa</li>
          <li>aaa</li>
          <li>aaa</li>
          <li>aaa</li>
          <li>aaa</li>
          <li>aaa</li>
          <li>aaa</li>
          <li>aaa</li>
        </ul> -->
        <ul>
          <li v-for="(goodsItem, index) in this.goods['pop'].list" :key="index">
            <p>{{goodsItem.title}}</p>
            <a :href="goodsItem.link">
              <img :src="goodsItem.image">
              <div>
                <p>{{goodsItem.title}}</p>
                <div class="goods-list-price">
                  <div class="text-price"><span>{{goodsItem.price}}</span></div>
                  <div><i class="collect-icon"></i><span>{{goodsItem.cfav}}</span></div>
                </div>

              </div>
            </a>
          </li>

        </ul>
      </div>

    </div>

  </div>
</template>

<script>
import BScroll from 'better-scroll';
// import Scroll from 'components/common/scroll/Scroll';

import { gethomeMultidata, getHomeGoods } from 'network/home';

export default {
  name: 'Category',
  data() {
    return {
      scroll: null,
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  created() {
    this.getHomeGoods('pop');
  },

  // //组件加载完成后
  mounted() {
    setTimeout(() => {
      this.initScroll();
    }, 1000);
  },

  // this.scroll = new BScroll(this.$refs.wrapper1, {
  //   // probeType: 3,
  //   click: false,
  //   // pullUpLoad: true,
  // });
  // },

  //   // 位置监听
  //   // this.scroll.on('scroll', (pos) => {
  //   //   console.log(pos);
  //   // });
  //   this.scroll.on('pullingUp', () => {
  //     console.log('shanglajiazai');
  //     this.scroll.finishPullUp();
  //   });
  // },

  // components: {
  //   Scroll,
  // },
  methods: {
    initScroll() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper1, {});
        this.scroll.refresh();
      });
    },
    btn() {
      console.log('dianji');
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].page = page;
        this.goods[type].list.push(...res.data.list);

        setTimeout(() => {
          this.initScroll();
        }, 5000);
      });
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: 300px;
  /* background-color: silver;*/
  overflow: hidden;
}
</style>