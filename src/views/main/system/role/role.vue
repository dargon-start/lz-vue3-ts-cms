<template>
  <div class="role">
    <page_search
      :formConfig="formConfig"
      @handSearch="handSearch"
      @handClear="handClear"
    ></page_search>
    <page_content
      :tableConfig="tableConfig"
      pageName="role"
      @handleCreate="handleCreate"
      @handleEdit="handleEdit"
      ref="pageContentRef"
    ></page_content>
    <page_modal
      pageName="role"
      :definalInfo="definalInfo"
      :modalConfig="modalconfig"
      title="角色"
      ref="pageModalRef"
      :otherInfo="otherInfo"
    >
      <el-tree
        ref="pageTreeRef"
        :data="menuList"
        show-checkbox
        node-key="id"
        :props="{
          children: 'children',
          label: 'name'
        }"
        @check="getCheckedKeys"
      />
    </page_modal>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, nextTick } from "vue";
import { useStore } from "@/store";

import page_search from "@/components/page_search/index";
import page_content from "@/components/page_content/index";
import page_modal from "@/components/page_modal/index";

import { usePageModal } from "@/hooks/page-modal-hook";
import { usePageSearch } from "@/hooks/page-search-hook";

import { mapMenuesToId } from "@/utils/menuMapRoutes";
import { formConfig, tableConfig, modalconfig } from "./config";
import { ElTree } from "element-plus";

const store = useStore();
const [pageContentRef, handClear, handSearch] = usePageSearch();

const pageTreeRef = ref<InstanceType<typeof ElTree>>();
const editeCb = (val: any) => {
  let definalMenusId = mapMenuesToId(val.menuList);
  //在这里我们回显数据时，可能pageTreeRef还没有绑定到页面，因此我们要使用nextTick来推迟操作
  nextTick(() => {
    pageTreeRef.value?.setCheckedKeys(definalMenusId);
  });
};
const [pageModalRef, definalInfo, handleCreate, handleEdit] = usePageModal(
  undefined,
  editeCb
);

const menuList = computed(() => store.state.entireMenu);
const otherInfo = ref({});
const getCheckedKeys = (data1: any, data2: any) => {
  const checkedKeys = data2.checkedKeys;
  const halfCheckedKeys = data2.halfCheckedKeys;
  const menuList = [...checkedKeys, ...halfCheckedKeys];
  otherInfo.value = { menuList };
};

//
</script>

<style scoped></style>
