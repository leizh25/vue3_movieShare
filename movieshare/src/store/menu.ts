import request from '@/utils/request';
import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menuStore', {
  state: () => ({
    menuList: [],
    index: 0,
  }),
  actions: {
    async getMenuData(type = 'movie') {
      const res: any = await request.get(`/menu?type=${type}`);
      console.log('res: ', res);
      this.menuList = res.tags;
    },
    changeIndex(index: number) {
      this.index = index;
    },
  },
});
