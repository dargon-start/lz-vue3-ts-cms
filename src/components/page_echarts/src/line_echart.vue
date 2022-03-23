<template>
  <div class="pie">
    <base_echart :options="options"></base_echart>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, computed } from "vue";
import base_echart from "@/base_ui/echarts/index";
import { EChartsOption } from "echarts";
import { ILineData } from "../type/type";
const props = defineProps<{
  data: ILineData;
}>();
const options = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {}
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: props.data.nameList
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: props.data.valueList,
        type: "line",
        areaStyle: {}
      }
    ]
  };
});
</script>
<style lang="less" scoped></style>
