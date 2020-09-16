<template>
  <div>
    <nav-bar>
      <div slot="left" class="titlt-left" @click="backUp">
        <img src="~assets/img/fanhui.png">
      </div>
      <div slot="center" class="nav-title">
        <div class="nav-detail-item" :class="{activate:index===currntIndex}" v-for="(item, index) in titles" :key="index" @click="btn(index)">{{item}}</div>
      </div>
    </nav-bar>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';

export default {
  name: 'GoodsDetailNav',
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currntIndex: 0,
    };
  },
  components: {
    NavBar,
  },

  methods: {
    btn(index) {
      this.currntIndex = index;
      this.$emit('titleClick', index);
    },
    backUp() {
      this.$router.back();
    },
  },
};
</script>

<style  scoped>
.nav-title {
  display: flex;
}
.nav-detail-item {
  flex: 1;
}

.titlt-left img {
  height: 44px;
  width: 40px;
}
.activate {
  color: red;
}
</style>