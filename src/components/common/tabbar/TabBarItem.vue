<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="active-item-icon"></slot>
    </div>
    <!-- <div :class="{active:isActive}">
      <slot name="item-name"></slot>
    </div> -->
    <div :style="activeColorStyle">
      <slot name="item-name"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBaeItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red',
    },
    dataInfo: String,
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeColorStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.push({
        path: this.path,
        // query: {
        //   dataInfo: this.dataInfo,
        // },
      });
    },
  },
};
</script>

<style >
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 13px;
}

.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.active {
  color: activeColor;
}
</style>