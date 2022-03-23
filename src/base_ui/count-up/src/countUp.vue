<template>
  <span ref="CountEl"></span>
</template>
<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults } from "vue";
import { CountUp } from "countup.js";
const props = withDefaults(
  defineProps<{
    number: number;
    prefiex?: string;
  }>(),
  {
    number: 0,
    prefiex: ""
  }
);

const instance = ref<CountUp | null>(null);
const CountEl = ref<HTMLSpanElement | null>(null);
onMounted(() => {
  instance.value = new CountUp(CountEl.value!, props.number, {
    duration: 2,
    prefix: props.prefiex
  });
  instance.value.start();
});
</script>
<style lang="less" scoped></style>
