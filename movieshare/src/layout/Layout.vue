<template>
  <div class="layout clearfix">
    <div class="header-wrapper"><Header></Header></div>
    <div class="content-wrapper clearfix">
      <!-- <el-affix :offset="60"> -->
      <div class="aside-wrapper clearfix"><Aside></Aside></div>
      <!-- </el-affix> -->
      <div class="main-wrapper"><Main></Main></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/Header.vue';
import Aside from '@/components/Aside.vue';
import Main from '@/components/Main.vue';
</script>
<style lang="scss">
.clearfix::before,
.clearfix::after {
  display: table;
  content: '';
  clear: both;
}
.layout {
  width: 100%;
  min-height: calc(100% - 60px);
  overflow-x: hidden;
  clear: both;
  box-sizing: border-box;
  // .header-wrapper {
  //   background-color: #bfa;
  // }
  .content-wrapper {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    padding-top: 60px;
    clear: both;
    display: flex;
    .aside-wrapper {
      width: 200px;
      height: calc(100vh - 60px);
      // background-color: beige;
      position: fixed;
    }
    .main-wrapper {
      width: calc(100vw - 200px - 40px);
      height: calc(100vh - 60px);
      position: absolute;
      left: 200px;
      top: 60px;
    }
  }
}
</style>
