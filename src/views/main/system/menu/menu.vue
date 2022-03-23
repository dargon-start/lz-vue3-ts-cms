<template>
  <div class="menu">
    <page_contentVue
      :tableConfig="tableConfig"
      pageName="menu"
    ></page_contentVue>
  </div>
</template>

<script lang="ts" setup>
import page_contentVue from "@/components/page_content/src/page_content.vue";
import { tableConfig } from "./config";
</script>

<style scoped></style>
