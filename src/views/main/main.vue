<template>
  <div class="main">
    <el-container class="container">
      <el-aside :width="isCollapse ? '60px' : '210px'" class="aside">
        <env_menu :isCollapse="isCollapse"></env_menu>
      </el-aside>
      <el-container class="content">
        <el-header>
          <env_header @handCollapse="handCollapse"></env_header>
        </el-header>
        <el-main>
          <div class="page">
            <transition
              name="animate__animated animate__bounce"
              enter-active-class="animate__slideInLeft animate__fast"
              leave-active-class="animate__slideOutRight animate__fast"
            >
              <router-view></router-view>
            </transition>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import env_menu from "@/components/nav_menui";
import env_header from "@/components/nav_header";
import "animate.css";
const isCollapse = ref(false);
const handCollapse = (isfold: boolean) => {
  isCollapse.value = isfold;
};
</script>
<style lang="less" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .container {
    width: 100%;
    height: 100%;
  }
  .aside {
    height: 100%;
    overflow: hidden;
    background-color: #001529;
    transition: width 0.3s linear;
  }
  .content {
    .el-header {
      height: 48px;
      background-color: #fff;
    }
    .el-main {
      color: #333;
      text-align: center;
      background-color: #f0f2f5;
      .page {
        background-color: #fff;
        border-radius: 5px;
      }
    }
  }
}
</style>
