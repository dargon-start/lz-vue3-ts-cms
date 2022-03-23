import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "@/assets/css/index.less";
import hyrequest from "./service/request";
import "element-plus/theme-chalk/el-loading.css";
import { setupStore } from "@/store/index";
import { globalRegister } from "./global";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";

const app = createApp(App);

app.use(store);
globalRegister(app);
setupStore();
app.use(router);
app.mount("#app");
app.use(ElementPlus, {
  locale: zhCn
});
