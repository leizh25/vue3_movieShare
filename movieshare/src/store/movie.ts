import request from '@/utils/request';
import { defineStore } from 'pinia';
export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movieList: <any>[],
  }),
  actions: {
    async getMovieList(
      type = 'movie',
      tag = '热门',
      page_limit = 50,
      page_start = 0,
    ) {
      const res: any = await request.get(
        `/cate?type=${type}&tag=${tag}&page_limit=${page_limit}&page_start=${page_start}`,
      );
      console.log('res: ', res);
      this.movieList = res.subjects.map((item: any) => {
        return {
          cover:
            'http://127.0.0.1:3000/img/?pName=' +
            item.cover.match(/([^/]+)(?=\.[^.]+$)/)[0],
          rate: item.rate,
          title: item.title,
          is_new: item.is_new,
          url: item.url,
        };
      });
    },
  },
});
