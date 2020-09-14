<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banner" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" @load='bannerImage'>
        </a>

      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper';
export default {
  name: 'HomeSwiper',
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isload: false,
    };
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    bannerImage() {
      if (!this.isload) {
        this.$emit('bannerImageLoad');
        this.isload = true;
      }
    },
  },
};
</script>

<style  scoped>
</style>