<template>
  <div>
    <nav-bar class='nav-home'>
      <div slot="center">购物车({{num}})</div>
    </nav-bar>
    <scroll class="home-content" ref="scroll">
      <cart-list></cart-list>
    </scroll>

    <cart-bot-bar></cart-bot-bar>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import CartList from './childCart/CartList';
import CartBotBar from './childCart/CartBotBar';

import Scroll from 'components/common/scroll/Scroll';
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
    CartBotBar,
    Scroll,
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
        for (const c of this.cartInfo) {
          c.check = true;
        }
        this.$refs.scroll.scrollRefresh();
        this.$store.commit('updateCartList', this.cartInfo);
      });
    },
  },
};
</script>

<style  scoped>
.nav-home {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.home-content {
  top: 44px;
  bottom: 94px;
  left: 0;
  right: 0;
  overflow: hidden;
  position: absolute;
}
</style>