import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  cartList: []
}

const store = new Vuex.Store({
  state,
  mutations: {
    updateSignCheck(state, item) {
      const info = state.cartList;
      //不清空无法做到响应式  具体以后根据响应式看修改
      state.cartList = [];
      let id = item.id;
      for (const iterator of info) {
        if (id === iterator.id) {
          iterator.check = !iterator.check;
          break;
        }
      }
      state.cartList = info
    },
    updateCartList(state, cartInfo) {
      state.cartList = cartInfo

    },

    updateAll(state, pl) {
      const info = state.cartList;
      //不清空无法做到响应式  具体以后根据响应式看修改
      state.cartList = [];
      if (pl) {
        for (const iterator of info) {
          iterator.check = false;
        }
        state.cartList = info;
      } else {
        for (const iterator of info) {
          iterator.check = true;
        }
        state.cartList = info;
      }


      console.log(state.cartList);
    }
  },
  getters: {
    getCartList(state) {
      return state.cartList;
    }
  },
  actions: {

  },
  modules: {}


  // ...
})


export default store