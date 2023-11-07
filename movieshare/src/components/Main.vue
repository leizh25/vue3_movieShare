<template>
  <div id="main">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" v-if="!!Component" />
        <p v-else>加载中</p>
      </transition>
    </router-view>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
#main {
  padding: 10px;
  width: 100%;
  height: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transform: translateX(30px);
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
p {
  font-size: 30px;
}
</style>
