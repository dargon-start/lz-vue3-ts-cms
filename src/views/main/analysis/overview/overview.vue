<template>
  <div class="overview">
    <lzCard title="关于">
      <div class="c-left">
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、webpack、 ElementPlus
        、TypeScript、Echart5 等后台系统解决方案。
      </div>
    </lzCard>
    <lzCard title="技术栈">
      <div class="c-left">
        <text_link :linkList="technologyStacks"></text_link>
      </div>
    </lzCard>
    <lzCard title="项目结构">
      <lzCode language="bash" :codeData="project_dir"></lzCode>
    </lzCard>
    <lzCard title="Git提交规范">
      <lzdescription :desData="descriptionData"></lzdescription>
    </lzCard>
  </div>
</template>

<script lang="ts" setup>
import {} from "vue";
import lzCard from "@/base_ui/card";
import text_link from "@/base_ui/text-link";
import lzCode from "@/base_ui/code/index";
import lzdescription from "@/base_ui/description";
import { technologyStacks, project_dir, descriptionData } from "./config/index";
</script>

<style scoped>
.c-left {
  text-align: left;
}
</style>
