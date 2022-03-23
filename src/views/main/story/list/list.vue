<template>
  <div class="list">
    <page_content
      :tableConfig="tableConfig"
      pageName="story"
      ref="pageContentRef"
    ></page_content>
  </div>
</template>

<script lang="ts" setup>
import page_content from "@/components/page_content/index";
import { tableConfig } from "./config";
</script>

<style scoped></style>
