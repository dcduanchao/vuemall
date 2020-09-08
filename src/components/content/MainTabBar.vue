<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/icon01.png">
        <img slot="active-item-icon" src="~assets/img/tabbar/icon01_active.png">
        <slot slot="item-name">首页</slot>

      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="green">
        <img slot="item-icon" src="~assets/img/tabbar/icon02.png">
        <img slot="active-item-icon" src="~assets/img/tabbar/icon02_active.png">
        <slot slot="item-name">分类</slot>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/icon03.png">
        <img slot="active-item-icon" src="~assets/img/tabbar/icon03_active.png">
        <slot slot="item-name">购物车</slot>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/icon04.png">
        <img slot="active-item-icon" src="~assets/img/tabbar/icon04_active.png">
        <slot slot="item-name">我的</slot>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '../common/tabbar/TabBar';
import TabBarItem from '../common/tabbar/TabBarItem';
export default {
  name: 'mainTabBar',
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>