<template>
  <div class="recommend">

    <div v-for="(item, index) in recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}} </div>
      </a>

    </div>

  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  padding: 15px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
  text-align: center;
  font-size: 13px;
}

.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 8px;
}
</style>