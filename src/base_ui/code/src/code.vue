<template>
  <pre class="bg">
      <code :class="'language-'+language" v-html="highlightedCode" />
  </pre>
</template>
<script lang="ts" setup>
import { defineProps, withDefaults, ref, watchEffect } from "vue";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

const props = withDefaults(
  defineProps<{
    codeData: string;
    language: string;
  }>(),
  {
    codeData: ""
  }
);

const highlightedCode = ref<string>("");
watchEffect(() => {
  highlightedCode.value = hljs.highlight(props.codeData, {
    language: props.language
  }).value;
});
</script>
<style lang="less" scoped>
.bg {
  padding: 10px;
  text-align: left;
  background: #f0f0f0;
}
</style>
