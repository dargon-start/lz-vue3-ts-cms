<template>
  <div class="goods">
    <page_search
      :formConfig="formConfig"
      @handClear="handClear"
      @handSearch="handSearch"
    ></page_search>
    <page_contentVue
      ref="pageContentRef"
      :tableConfig="tableConfig"
      pageName="goods"
    >
      <template #imgUrl="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          :initial-index="4"
          fit="cover"
          :hide-on-click-modal="true"
        />
      </template>
    </page_contentVue>
  </div>
</template>

<script lang="ts" setup>
import page_search from "@/components/page_search/index";
import page_contentVue from "@/components/page_content/src/page_content.vue";
import { formConfig, tableConfig } from "./config";
import { usePageSearch } from "@/hooks/page-search-hook";
const [pageContentRef, handClear, handSearch] = usePageSearch();
</script>

<style scoped></style>
