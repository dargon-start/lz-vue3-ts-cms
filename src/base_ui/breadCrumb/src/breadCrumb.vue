<template>
  <div class="bread">
    <el-breadcrumb separator="/">
      <template v-for="item in crumbItems" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.url }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from "vue";
import { crumbType } from "../type/index";
defineProps({
  crumbItems: Array as PropType<crumbType[]>
});
</script>
<style lang="less" scoped></style>
