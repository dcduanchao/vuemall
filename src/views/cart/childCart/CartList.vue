<template>
  <div class="cart-list-wrap">
    <cart-list-item :cart-list="cartList"></cart-list-item>
   

  </div>
</template>

<script>
import CartListItem from './CartListItem';
export default {
  name: 'CartList',
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    CartListItem,
  },
};
</script>

<style  scoped>
.cart-list-wrap {
  position: relative;
  top: 44px;
  bottom: 89px;
  background-color: #fff;
}
</style>