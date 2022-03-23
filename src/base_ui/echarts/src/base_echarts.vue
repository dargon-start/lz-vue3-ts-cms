<template>
  <div class="base_echarts">
    <div
      class="echart"
      ref="eachartEl"
      :style="{ width: width, height: height }"
    ></div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from "vue";
import { useEcharts } from "../hooks/useEcharts";
import { EChartsOption } from "echarts";

const props = withDefaults(
  defineProps<{
    options: EChartsOption;
    width: string;
    height: string;
  }>(),
  {
    options: () => ({}),
    width: "100%",
    height: "350px"
  }
);
const eachartEl = ref<HTMLElement>();
onMounted(() => {
  console.log(eachartEl.value);
  const setOption = useEcharts(eachartEl.value!);
  watchEffect(() => {
    setOption(props.options);
  });
});
</script>
<style lang="less" scoped></style>
