<template>
  <div class="pie">
    <base_echart :options="options"></base_echart>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, computed } from "vue";
import base_echart from "@/base_ui/echarts/index";
import { EChartsOption } from "echarts";
import { Idata } from "../type/type";
const props = defineProps<{
  data: Idata[];
}>();
const options = computed<EChartsOption>(() => {
  return {
    legend: {
      left: "center"
    },
    tooltip: {
      trigger: "item"
    },
    series: [
      {
        name: "数量",
        type: "pie",
        radius: "50%",
        data: props.data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };
});
</script>
<style lang="less" scoped></style>
