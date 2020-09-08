<template>
  <div>
    <div> 我是购物车{{dataInfo}}</div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    dataInfo: {
      type: String,
      default() {
        return this.$route.query.dataInfo ? this.$route.query.dataInfo : null;
      },
    },
  },
};
</script>

<style >
</style>