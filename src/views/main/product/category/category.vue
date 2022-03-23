<template>
  <div class="user">
    <page_search
      :formConfig="formConfig"
      @handClear="handClear"
      @handSearch="handSearch"
    ></page_search>
    <page_content
      ref="pageContentRef"
      :tableConfig="tableConfig"
      pageName="category"
      @handleCreate="handleCreate"
      @handleEdit="handleEdit"
    ></page_content>
    <page_modal
      :modalConfig="modalconfig"
      title="类别"
      ref="pageModalRef"
      pageName="category"
      :definalInfo="definalInfo"
    ></page_modal>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";
import { useStore } from "@/store";
import page_search from "@/components/page_search/index";
import page_content from "@/components/page_content/src/page_content.vue";
import page_modal from "@/components/page_modal/src/page_modal.vue";

import { formConfig, tableConfig, modalconfig } from "./config";

import { usePageSearch } from "@/hooks/page-search-hook";
import { usePageModal } from "@/hooks/page-modal-hook";

const store = useStore();
const [pageContentRef, handClear, handSearch] = usePageSearch();

const [pageModalRef, definalInfo, handleCreate, handleEdit] = usePageModal();
</script>

<style scoped></style>
