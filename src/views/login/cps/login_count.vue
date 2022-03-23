<template>
  <div>
    <el-form
      label-width="60px"
      class="form_count"
      :model="acount"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input type="text" v-model="acount.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input show-password v-model="acount.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ElForm } from "element-plus";
import { reactive, defineExpose, ref } from "vue";
import { rules } from "../config/index";
import localCache from "@/utils/cache";
import { useStore } from "vuex";
const store = useStore();
const acount = reactive({
  name: localCache.getCache("name") ?? "",
  password: localCache.getCache("password") ?? ""
});
const formRef = ref<InstanceType<typeof ElForm>>();
//如果属性的规则通过，进行的登录操作
const handLogin = (IskeepPwd: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      //是否需要记住密码
      if (IskeepPwd) {
        localCache.setCache("name", acount.name);
        localCache.setCache("password", acount.password);
      } else {
        localCache.removeCache("name");
        localCache.removeCache("password");
      }
      //处理数据
      store.dispatch("loginModule/loginAount", acount);
    }
  });
};
defineExpose({
  handLogin
});
</script>
<style lang="less" scoped></style>
