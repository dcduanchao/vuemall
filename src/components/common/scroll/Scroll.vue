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
    this.$nextTick(() => {
      this.initScroll();
      this.scrollPosReturn();
      this.scrollPullUpLoad();
      // this.scrollRefresh();
    });
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
      this.scroll.scrollTo(x, y, time);
    },
    scrollPosReturn() {
      this.scroll.on('scroll', (pos) => {
        this.$emit('scollPos', pos);
      });
    },

    scrollPullUpLoad() {
      this.scroll.on('pullingUp', () => {
        this.$emit('scrollPullUp');
      });
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
      // this.scrollRefresh();
    },
    scrollRefresh() {
      this.$nextTick(() => {
        this.scroll && this.scroll.refresh();
      });
    },
  },
};
</script>

<style>
</style>