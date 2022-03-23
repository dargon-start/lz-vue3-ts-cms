<template>
  <div class="page_countUp">
    <div class="header">
      <span>{{ Data.title }}</span>
      <el-tooltip class="box-item" :content="Data.tips" placement="top">
        <el-icon><warning /></el-icon>
      </el-tooltip>
    </div>
    <div class="content">
      <lzCountUp :number="Data.number1" :prefiex="prefiex"></lzCountUp>
    </div>
    <div class="foorter">
      <span>
        {{ Data.title }}
        <lzCountUp :number="Data.number2" :prefiex="prefiex"></lzCountUp>
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Warning } from "@element-plus/icons-vue";
import lzCountUp from "@/base_ui/count-up";
import { defineProps, withDefaults } from "vue";
const props = withDefaults(
  defineProps<{
    Data: any;
    prefiex?: string;
  }>(),
  {
    Data: () => ({}),
    prefiex: ""
  }
);
</script>
<style lang="less" scoped>
.page_countUp {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 130px;
  overflow: hidden;
  background: #fff;
  padding: 10px;
  box-shadow: 0 5 12 rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  margin-top: 10px;
  .header {
    display: flex;
    justify-content: space-between;
    color: #959090;
    margin-left: 10px;
  }
  .content {
    border-bottom: 1px solid #e0e0e0;
    font-size: 24px;
    text-align: left;
    padding: 10px;
  }
  .foorter {
    margin-top: 20px;
    text-align: left;
  }
}
</style>
