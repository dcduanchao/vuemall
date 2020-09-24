<template>
  <div class="cart-bot-bar flex">
    <div><input type="checkbox" class="check" id="check" v-model="isCheck" @click="selectAll">&ensp;<label for="check"> 全部</label> </div>
    <div>合计：{{totalPrice}}</div>
    <div class="total-count">去结算{{checkLength}}</div>
  </div>
</template>

<script>
export default {
  name: 'CartBotBar',
  data() {
    return {};
  },

  computed: {
    // cartList: {
    //   // return this.$store.state.cartList;
    //   get: function () {
    //     return this.$store.state.cartList;
    //   },
    //   set: function (newval) {
    //     this.$store.state.cartList = newval;
    //   },
    // },
    cartList() {
      return this.$store.state.cartList;
    },
    isCheck: {
      get: function () {
        let c = true;
        for (const iterator of this.cartList) {
          if (!iterator.check) {
            c = false;
            break;
          }
        }

        return c;
      },

      set: function (val) {},
    },

    totalPrice() {
      let c = this.cartList;
      return (
        '￥' +
        c
          .filter((item) => {
            return item.check;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      let c = this.cartList;
      return '(' + c.filter((item) => item.check).length + ')';
    },
  },

  methods: {
    selectAll() {
      console.log('**********');

      this.$store.commit('updateAll', this.isCheck);
    },
  },
};
</script>

<style lang="less" scoped="scoped">
.cart-bot-bar {
  position: fixed;
  bottom: 44px;
  left: 0;
  right: 0;
  height: 50px;
  padding: 0;
  font-size: 13px;
  align-items: center;
  justify-content: space-between;
  background-color: palegreen;
  border-bottom: 1px solid #ececec;
  border-top: 1px solid #ececec;
  font-weight: 700;
  .check {
    width: 18px;
    height: 18px;
    overflow: hidden;
    border-radius: 100%;
    vertical-align: bottom;
    border: 1px solid #ececec;
  }
  .check:checked {
    border: 1px solid var(--color-high-text);
    background: url(~assets/img/detail/check_active.png) no-repeat center;
    background-size: cover;
  }

  .total-count {
    height: 50px;
    line-height: 50px;
    width: 100px;
    right: 0px;
    background-color: red;
    text-align: center;
  }
}
</style>
