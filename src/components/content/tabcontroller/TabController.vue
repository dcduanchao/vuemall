<template>
  <div class="tab-controller">
    <div v-for="(item, index) in titles" :key="index" class="tab-controller-item" :class="{activate:index===currntIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabController',
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      currntIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currntIndex = index;
      this.$emit('tabClick', index);
    },
  },
};
</script>

<style  scoped>
.tab-controller {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
}
.tab-controller-item {
  flex: 1;
}
.tab-controller-item span {
  padding: 5px;
}
.activate {
  color: red;
}
.activate span {
  border-bottom: 3px solid black;
}
</style>