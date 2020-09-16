<template>
  <div class="wrapper1" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      },
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    //创建对象

    setTimeout(() => {
      this.$nextTick(() => {
        this.initScroll();
        this.scrollPosReturn();
        this.scrollPullUpLoad();
        // this.scrollRefresh();
      });
    }, 500);
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
      });
    },
    backClick(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    scrollPosReturn() {
      this.scroll.on('scroll', (pos) => {
        this.$emit('scollPos', pos);
      });
    },

    scrollPullUpLoad() {
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('scrollPullUp');
        });
      }
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    scrollRefresh() {
      this.scroll && this.scroll.refresh();
    },

    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
};
</script>

<style>
</style>