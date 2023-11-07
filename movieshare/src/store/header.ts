import { defineStore } from 'pinia';

const useHeaderStore = defineStore('headerStore', {
  state: () => ({
    index: 0,
  }),
  actions: {
    changeIndex(index: number) {
      this.index = index;
    },
  },
});
export default useHeaderStore;
