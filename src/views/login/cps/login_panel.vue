<template>
  <div class="panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="curtTab">
      <el-tab-pane name="acount">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><user-filled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <loginCount class="Litem" ref="accountRef"></loginCount>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <loginPhone class="Litem" ref=""></loginPhone>
      </el-tab-pane>
    </el-tabs>
    <div class="other_info">
      <el-checkbox size="large" v-model="IskeepPwd">记住密码</el-checkbox>
      <el-link type="primary">找回密码</el-link>
    </div>
    <el-button type="primary" class="login_btn" @click="handleLoginClick"
      >登录</el-button
    >
  </div>
</template>
<script lang="ts" setup>
import loginCount from "./login_count.vue";
import loginPhone from "./login_phone.vue";
import { ref } from "vue";
import { UserFilled, Iphone } from "@element-plus/icons-vue";
const accountRef = ref<InstanceType<typeof loginCount>>();
const IskeepPwd = ref(true);
const curtTab = ref("acount");
const handleLoginClick = () => {
  //调用loginCount组件中的方法
  if (curtTab.value == "acount") {
    accountRef.value?.handLogin(IskeepPwd.value);
  } else {
    console.log("手机号登录");
  }
};
</script>
<style lang="less" scoped>
.panel {
  width: 340px;
  margin-top: -150px;
  .Litem {
    margin-top: 20px;
  }
  .title {
    text-align: center;
  }
  .el-icon {
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .other_info {
    display: flex;
    justify-content: space-between;
  }
  .login_btn {
    width: 100%;
    height: 35px;
    margin-top: 10px;
  }
}
</style>
