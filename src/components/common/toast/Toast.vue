<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    message: {
      type: String,
      default: {
        return: '',
      },
    },
    isShow: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  width: 200px;
  height: 100px;
  text-align: center;
  line-height: 100px;
}
</style>