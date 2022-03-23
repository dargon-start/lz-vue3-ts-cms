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
      pageName="users"
      @handleCreate="handleCreate"
      @handleEdit="handleEdit"
    ></page_content>
    <page_modal
      :modalConfig="fomrDateRef"
      title="用户"
      ref="pageModalRef"
      pageName="users"
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

const createCb = () => {
  const passwordItem = modalconfig.formItems.find((item) => {
    return item.field === "password";
  });

  passwordItem!.isHidden = false;
};
const editCb = () => {
  const passwordItem = modalconfig.formItems.find(
    (item) => item.field === "password"
  );
  passwordItem!.isHidden = true;
};
const [pageModalRef, definalInfo, handleCreate, handleEdit] = usePageModal(
  createCb,
  editCb
);
//处理动态显示部门和角色
const fomrDateRef = computed(() => {
  const departmentItem = modalconfig.formItems.find((item) => {
    return item.field === "departmentId";
  });
  departmentItem!.options = store.state.entireDepartment.map((item) => ({
    title: item.name,
    value: item.id
  }));
  const roleItem = modalconfig.formItems.find((item) => {
    return item.field === "roleId";
  });
  roleItem!.options = store.state.entireDepartment.map((item) => ({
    title: item.name,
    value: item.id
  }));
  return modalconfig;
});
</script>

<style scoped></style>
