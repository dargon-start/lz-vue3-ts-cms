<template>
  <div class="page_modal">
    <el-dialog
      v-model="centerDialogVisible"
      :title="title"
      width="30%"
      center
      destroy-on-close
    >
      <lzForm v-bind="modalConfig" v-model="formData"></lzForm>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handConfimBtn">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import lzForm from "@/base_ui/form";
import store from "@/store";
import { defineProps, ref, defineExpose, watch } from "vue";
const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  },
  definalInfo: {
    type: Object,
    default: () => ({})
  },
  otherInfo: {
    type: Object,
    default: () => ({})
  },
  pageName: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});
const formData = ref<any>({});
watch(
  () => props.definalInfo,
  (newValue: any) => {
    props.modalConfig.formItems.forEach((item: any) => {
      formData.value[`${item.field}`] = newValue[`${item.field}`];
    });
  }
);
//控制dialog是否显示
const centerDialogVisible = ref(false);

const handConfimBtn = () => {
  centerDialogVisible.value = false;
  //判断是创建还是修改
  if (Object.keys(props.definalInfo).length) {
    //修改
    store.dispatch("systemModule/editPageDataAction", {
      pageName: props.pageName,
      editData: { ...formData.value, ...props.otherInfo },
      id: props.definalInfo.id
    });
  } else {
    store.dispatch("systemModule/createPageDataAction", {
      pageName: props.pageName,
      newData: { ...formData.value, ...props.otherInfo }
    });
  }
};
defineExpose({ centerDialogVisible });
</script>
<style lang="less" scoped></style>
