<template>
  <div class="nav_header">
    <el-icon :size="30" @click="handFold" class="icon"
      ><expand v-if="isfold" /><fold v-if="!isfold"
    /></el-icon>
    <div class="content">
      <div class="crumbs">
        <breadCrumb :crumbItems="crumbItems"></breadCrumb>
      </div>
      <div class="userInfo">
        <userInfo></userInfo>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Expand, Fold } from "@element-plus/icons-vue";
import { ref, defineEmits, computed } from "vue";
//引入组件
import userInfo from "./user_info.vue";
import breadCrumb from "@/base_ui/breadCrumb/src/breadCrumb.vue";
import { useStore } from "@/store";
import { urlMapCrumb } from "@/utils/menuMapRoutes";
import { useRoute } from "vue-router";
const store = useStore();
const isfold = ref(false);
const emit = defineEmits(["handCollapse"]);
const handFold = () => {
  isfold.value = !isfold.value;
  emit("handCollapse", isfold.value);
};
const userMenus = store.state.loginModule.userMenus;
const route = useRoute();

const crumbItems = computed(() => {
  const curPath = route.path;
  return urlMapCrumb(userMenus, curPath);
});
</script>
<style lang="less" scoped>
.nav_header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  .icon {
    cursor: pointer;
  }
  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }
}
</style>
