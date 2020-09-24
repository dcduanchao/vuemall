<template>
  <div class="cart-list-wrap">
    <cart-list-item></cart-list-item>

  </div>
</template>

<script>
import CartListItem from './CartListItem';
export default {
  name: 'CartList',

  components: {
    CartListItem,
  },
};
</script>

<style  scoped>
.cart-list-wrap {
  position: relative;
  background-color: #fff;
}
</style>