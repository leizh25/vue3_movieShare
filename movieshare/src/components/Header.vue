<template>
  <div id="header">
    <div class="left">
      <div class="logo"></div>
      <h1 @click="go(1)">影视分享网</h1>
    </div>
    <ul class="center">
      <li @click="go(0)" :class="{ active: headerStore.index === 0 }">
        <!-- <Film style="width: 1em; height: 1em" /> -->
        <span>电影</span>
      </li>
      <li @click="go(1)" :class="{ active: headerStore.index === 1 }">
        <span>电视剧</span>
      </li>
    </ul>
    <div class="right">
      <el-input
        class="w-50 m-2 input"
        placeholder="输入片子名称"
        prefix-icon="Search"
      />
      <el-switch
        v-model="isDark"
        class="mt-2"
        style="margin-left: 24px"
        inline-prompt
        active-icon="Sunny"
        inactive-icon="Moon"
        size="large"
        @change="toggleDark()"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import useHeaderStore from '@/store/header';
import { useDark, useToggle } from '@vueuse/core';
import { ref } from 'vue';
const dark = useDark();
const toggleDark = useToggle(dark);
const headerStore = useHeaderStore();
const $router = useRouter();
const isDark = ref<boolean>(true);
function go(index: number) {
  console.log(index);
  if (index === 0) {
    $router.push('/movie');
    headerStore.changeIndex(0);
  } else {
    $router.push('/tv');
    headerStore.changeIndex(1);
  }
}
</script>
<style lang="scss">
#header {
  width: 100%;
  height: 60px;
  padding: 0 10px;
  clear: both;
  box-shadow: var(--el-box-shadow-light);
  background-image: radial-gradient(transparent 1px, #fff 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(6px);
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  .left {
    height: 100%;
    .logo {
      width: 60px;
      height: 60px;
      float: left;
      margin-right: 10px;
      background: url(../assets/logo.png) no-repeat;
      background-size: contain;
    }
    h1 {
      display: inline-block;
      font-size: 30px;
      line-height: 60px;
      cursor: pointer;
    }
  }
  .center {
    width: 300px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;

    li {
      width: 100px;
      font-size: 20px;
    }
    li:hover {
      cursor: pointer;
    }
    li.active {
      text-shadow: 0 0 12px rgba($color: #f00, $alpha: 1);
    }
  }
  .right {
    width: 300px;
    display: flex;
    align-items: center;
    margin-right: 30px;
    .sun {
      margin-left: 30px;
    }
  }
}
</style>
