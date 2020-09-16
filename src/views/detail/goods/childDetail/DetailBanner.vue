<template>
  <div class="banner">
    <swiper>
      <swiper-item v-for="(item,index) in topImage" :key="index">
        <img :src="item" >
      </swiper-item>
    </swiper>

  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper';
export default {
  name: 'DetailBanner',
  props: {
    topImage: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },

  methods: {
  
  },
};
</script>

<style  scoped>
.banner {
  height: 300px;
  overflow: hidden;
}
.banner img {
  height: 300px;
}
</style>