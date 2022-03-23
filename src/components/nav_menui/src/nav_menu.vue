<template>
  <div class="nav_menu">
    <div class="nav_head">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title">vue3+ts</span>
    </div>
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      unique-opened
      :collapse="isCollapse"
    >
      <template v-for="(item, index) in userMenus" :key="item.id">
        <template v-if="item.type == 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon v-if="index == 0"><monitor /></el-icon>
              <el-icon v-if="index == 1"><setting /></el-icon>
              <el-icon v-if="index == 2"><shopping-bag /></el-icon>
              <el-icon v-if="index == 3"><chat-round /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem)"
              >
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import {
  Monitor,
  Setting,
  ShoppingBag,
  ChatRound
} from "@element-plus/icons-vue";
import { computed, defineProps, ref } from "vue";
import { useStore } from "@/store";
import { useRouter, useRoute } from "vue-router";
import { finfMenuId } from "@/utils/menuMapRoutes";
const router = useRouter();
const route = useRoute();
const store = useStore();
defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
});
const userMenus = computed(() => {
  return store.state.loginModule.userMenus;
}).value;

const handleMenuItemClick = (menu: any) => {
  router.push({ path: menu.url ?? "/not-fount" });
};

const defaultValue = ref("39");
defaultValue.value = finfMenuId(userMenus, route.path).id + "";
</script>

<style lang="less" scoped>
.nav_menu {
  height: 100%;
  .nav_head {
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    .img {
      width: 30px;
      height: 30px;
      vertical-align: middle;
    }
    .title {
      margin-left: 10px;
      font-size: 20px;
      color: white;
    }
  }
  .el-menu {
    border-right: 0px;

    .el-submenu {
      background-color: #001529 !important;
      // 二级菜单 ( 默认背景 )
      .el-menu-item {
        padding-left: 50px !important;
        background-color: #315f89 !important;
      }
    }

    ::v-deep .el-submenu__title {
      background-color: #001529 !important;
    }

    // hover 高亮
    .el-menu-item:hover {
      color: #fff !important; // 菜单
    }

    .el-menu-item.is-active {
      color: #fff !important;
      background-color: #0a60bd !important;
    }
  }
}
</style>
