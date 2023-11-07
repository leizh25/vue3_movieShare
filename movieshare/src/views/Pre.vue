<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function goHome() {
  router.push('/movie');
}
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-affix :offset="0">
          <div class="box">
            <a href="#">首页</a>
            <a href="#">第一</a>
            <a href="#">第二</a>
            <a href="#">第三</a>
            <el-button size="large" icon="Search">Search</el-button>
            <!-- 下拉菜单 -->
            <div class="a2">
              <el-dropdown>
                <el-button type="primary" style="height: 50px">
                  Dropdown List
                  <el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item>Action 4</el-dropdown-item>
                    <el-dropdown-item>Action 5</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
        </el-affix>
      </el-header>
      <el-carousel :interval="4000" type="card" height="500px">
        <el-carousel-item>
          <img src="../assets/movie1.webp" />
          <h3 text="2xl" justify="center"></h3>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/movie2.webp" />
          <h3 text="2xl" justify="center"></h3>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/movie3.webp" />
          <h3 text="2xl" justify="center"></h3>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/movie4.webp" />
          <h3 text="2xl" justify="center"></h3>
        </el-carousel-item>
      </el-carousel>
      <div class="a1" @click="goHome">热门推荐</div>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content ep-bg-purple" />
          1111
        </el-col>
        <el-col :span="6">
          <div class="grid-content ep-bg-purple" />
          111
        </el-col>
        <el-col :span="6">
          <div class="grid-content ep-bg-purple" />
          111
        </el-col>
        <el-col :span="6">
          <div class="grid-content ep-bg-purple" />
          111
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content ep-bg-purple" />
          1111
        </el-col>
        <el-col :span="6">
          <div class="grid-content ep-bg-purple" />
          111
        </el-col>
        <el-col :span="6">
          <div class="grid-content ep-bg-purple" />
          111
        </el-col>
        <el-col :span="6">
          <div class="grid-content ep-bg-purple" />
          111
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content ep-bg-purple" />
          1111
        </el-col>
        <el-col :span="6">
          <div class="grid-content ep-bg-purple" />
          111
        </el-col>
        <el-col :span="6">
          <div class="grid-content ep-bg-purple" />
          111
        </el-col>
        <el-col :span="6">
          <div class="grid-content ep-bg-purple" />
          111
        </el-col>
      </el-row>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

img {
  width: 100%;
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.a1 {
  width: 100%;
  height: 50px;
  background-color: aquamarine;
  text-align: center;
  border-radius: 20px;
  font-size: 40px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.box {
  height: 50px;
  /* border-top: 3px solid aquamarine;
  border-bottom: 2px solid aquamarine; */
  background-color: antiquewhite;
}

.box a {
  width: 200px;
  height: 50px;
  display: inline-block;
  text-align: center;
  line-height: 40px;
  font-size: 12px;
  color: #999999;
  text-decoration: none;
}

.box a:hover {
  background-color: aliceblue;
  color: black;
}
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.a2 {
  float: right;
  margin-top: 0;
}
</style>
