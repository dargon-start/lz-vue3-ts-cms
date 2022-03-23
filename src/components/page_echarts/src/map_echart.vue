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
import { convertData } from "../utils/convert-data";
const props = defineProps<{
  data: Idata[];
}>();
const options = computed<EChartsOption>(() => {
  return {
    backgroundColor: "#fff",
    title: {
      text: "全国销量统计",
      left: "center",
      textStyle: {
        color: "#fff"
      }
    },
    tooltip: {
      trigger: "item",
      formatter: function (params) {
        return params.name + " : " + params.value[2];
      }
    },
    legend: {
      orient: "vertical",
      y: "bottom",
      x: "right",
      data: ["销量"],
      textStyle: {
        color: "#000"
      }
    },
    visualMap: {
      min: 0,
      max: 50000,
      calculable: true,
      inRange: {
        color: ["#50a3ba", "#eac736", "#d94e5d"]
      },
      textStyle: {
        color: "#fff"
      }
    },
    geo: {
      map: "china",
      roam: "scale",
      emphasis: {
        areaColor: "#f4cccc",
        borderColor: "rgb(9, 54, 95)",
        itemStyle: {
          areaColor: "#f4cccc"
        }
      }
    },
    series: [
      {
        name: "销量",
        type: "scatter",
        coordinateSystem: "geo",
        data: convertData(props.data),
        symbolSize: 12,
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          emphasis: {
            borderColor: "#fff",
            borderWidth: 1
          }
        }
      }
    ]
  };
});
</script>
<style lang="less" scoped></style>
