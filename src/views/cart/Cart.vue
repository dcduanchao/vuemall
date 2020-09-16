<template>
  <div>
    <nav-bar class='nav-home'>
      <div slot="center">购物车({{num}})</div>
    </nav-bar>

    <cart-list :cart-list='cartInfo'></cart-list>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import CartList from './childCart/CartList';

import { cartCount, cartInfo } from 'network/detail';

export default {
  name: 'Cart',
  props: {},
  data() {
    return {
      num: 0,
      cartInfo: [],
    };
  },
  components: {
    NavBar,
    CartList,
  },
  created() {
    this.getCartCount();
    this.getCartInfo();
  },
  methods: {
    getCartCount() {
      cartCount().then((res) => {
        this.num = res.data;
      });
    },
    getCartInfo() {
      cartInfo().then((res) => {
        this.cartInfo = res.data;
      });
    },
  },
};
</script>

<style  scoped>
.nav-home {
  /* base.js 用法 */
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>