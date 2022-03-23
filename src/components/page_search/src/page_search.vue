<template>
  <div>
    <lzForm v-bind="formConfig" v-model="formData">
      <template #header>
        <h3>高级搜索</h3>
      </template>
      <template #footer>
        <div class="operate_btn">
          <el-button type="primary" :icon="Refresh" @click="handClearForm"
            >重置</el-button
          >
          <el-button type="primary" :icon="Search" @click="handSearchForm"
            >搜索</el-button
          >
        </div>
      </template>
    </lzForm>
  </div>
</template>
<script lang="ts" setup>
import { Search, Refresh } from "@element-plus/icons-vue";
import { ref, defineProps, defineEmits } from "vue";
import lzForm from "@/base_ui/form";
const props = defineProps({
  formConfig: {
    type: Object,
    required: true
  }
});
const emits = defineEmits(["handClear", "handSearch"]);
//优化一：通过formItmes来决定formData中的属性
const formItems = props.formConfig.formItems ?? [];
const formOriginData: any = {};
for (const item of formItems) {
  formOriginData[`${item.field}`] = "";
}
const formData = ref(formOriginData);
console.log(formData);

//优化二：重置表单信息
const handClearForm = () => {
  // for (const key in formOriginData) {
  //   formData.value[`${key}`] = formOriginData[key];
  // }
  formData.value = formOriginData;
  emits("handClear");
};

//优化三：搜索功能
const handSearchForm = () => {
  emits("handSearch", formData.value);
};
</script>
<style lang="less" scoped>
.operate_btn {
  text-align: right;
  margin: 0 40px 20px 0;
}
</style>
