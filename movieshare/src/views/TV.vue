<template>
  <!-- <transition-group tag="div" name="why"> -->
  <div class="movies" scroll="no" ref="movies">
    <el-card
      :body-style="{ padding: '0px' }"
      class="movie"
      v-for="(item, index) in movieStore.movieList"
      :key="index"
      @click="showDrawer([item.title, item.url])"
    >
      <div class="newBar" v-show="item.is_new">NEW</div>
      <img :src="item.cover" class="image" />
      <div style="padding: 14px">
        <span style="font-size: 20px">{{ item.title }}</span>
        <div class="bottom">
          <time class="time">评分: {{ item.rate ? item.rate : '暂无' }}</time>
          <el-button text class="button">
            查看详情
            <el-icon><ArrowRightBold /></el-icon>
          </el-button>
        </div>
      </div>
    </el-card>
  </div>
  <!-- 抽屉 -->
  <el-drawer
    v-model="isShowDrawer"
    :title="`详情: ${movieInfo.title}`"
    direction="btt"
    size="93%"
    ref="drawerRef"
    @scroll.stop=""
  >
    <iframe
      :src="movieInfo.url"
      frameborder="0"
      width="100%"
      height="99%"
      sandbox="allow-scripts"
      @scroll.stop=""
      @close="handleClose"
      ref="iframeRef"
      style="transform: translateY(-20px)"
    ></iframe>
  </el-drawer>
</template>
<script setup lang="ts">
import { useMenuStore } from '@/store/menu';
import { useMovieStore } from '@/store/movie';
import { nextTick, onMounted, reactive, ref, watch } from 'vue';
const iframeRef = ref();
const isShowDrawer = ref(false);
const movieInfo = reactive({
  title: '',
  url: '',
});
const movieStore = useMovieStore();
const menuStore = useMenuStore();
watch(
  () => menuStore.index,
  () => {
    movieStore.$reset();
    movieStore.getMovieList('tv', menuStore.menuList[menuStore.index]);
  },
);
onMounted(() => {
  movieStore.$reset();
  console.log('挂载');

  movieStore.getMovieList('tv', menuStore.menuList[menuStore.index]);
});
function showDrawer([title, url]: string[]) {
  isShowDrawer.value = true;
  movieInfo.title = title;
  movieInfo.url = url;
  nextTick(() => {
    // iframeRef.value.contentWindow.console = {
    //   log: function () {},
    //   error: function () {},
    //   warn: function () {},
    //   info: function () {},
    // };
  });
}
function handleClose() {
  movieInfo.title = '';
  movieInfo.url = '';
}
</script>
<style>
.movies {
  width: 100%;
  transform-style: preserve-3d;
  perspective: 1000px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  cursor: pointer;
}
.movie {
  width: 300px;
  overflow: hidden;
  margin-bottom: 20px;
}
.movie:hover {
  transform: translateZ(10px);
  box-shadow: var(--el-box-shadow-dark);
}
.newBar {
  font-size: 25px;
  padding: 5px;
  color: #fff;
  position: absolute;
  background-color: #f00;
  opacity: 0.7;
  transform: translateX(227px) translateY(20px) rotateZ(45deg);
}
.newBar::before {
  content: '';
  width: 0;
  height: 0;
  opacity: 0.9;
  border: 18px solid;
  border-color: transparent #f00 #f00 transparent;
  position: absolute;
  left: -36px;
  top: -1px;
}
.newBar::after {
  content: '';
  width: 0;
  height: 0;
  opacity: 0.9;
  border: 18px solid;
  border-color: transparent transparent #f00 #f00;
  position: absolute;
  left: 70px;
  top: -1px;
}
.time {
  font-size: 18px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
