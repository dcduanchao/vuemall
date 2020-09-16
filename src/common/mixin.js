import { debounce } from 'common/utils';


export const itemListerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    let refresh = debounce(this.$refs.scroll.scrollRefresh, 100);
    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on('itemLoadImage', this.itemImgListener);
  },
}