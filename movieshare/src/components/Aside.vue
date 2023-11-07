<template>
  <div class="aside">
    <el-menu
      :default-active="menuStore.index.toString()"
      class="el-menu-vertical-demo"
      :collapse="false"
    >
      <el-menu-item
        :index="index.toString()"
        v-for="(item, index) in menuStore.menuList"
        :key="index"
        @click="menuStore.changeIndex(index)"
      >
        <el-icon><VideoCameraFilled /></el-icon>
        <template #title>{{ item }}</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useMenuStore } from '@/store/menu';
import useHeaderStore from '@/store/header';
const headerStore = useHeaderStore();
const menuStore = useMenuStore();
watch(
  () => headerStore.index,
  () => {
    menuStore.$reset();
    if (headerStore.index == 0) {
      menuStore.getMenuData('tv');
    } else {
      menuStore.getMenuData('movie');
    }
  },
);
onMounted(() => {
  menuStore.getMenuData();
});
</script>
<style>
.aside {
  height: 100%;
  padding: 10px;
}
</style>
