<template>
  <div class="chat">
    <h2 class="head">留下你的留言吧</h2>
    <div id="edit" ref="editRef"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import E from "wangeditor";

onMounted(() => {
  const editRef = ref<HTMLDivElement | null>(null);
  const editor = new E("#edit");
  editor.config.placeholder = "请输入~";
  editor.create();
});
</script>

<style scoped lang="less">
.edit {
  width: 100%;
  height: 500px;
  .headh {
    padding-top: 10px;
  }
}
</style>
