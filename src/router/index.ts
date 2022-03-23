import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import localCache from "@/utils/cache";
import { firstmenu } from "@/utils/menuMapRoutes";
const Login = () => import("@/views/login/login.vue");
const Main = () => import("@/views/main/main.vue");
const notFount = () => import("@/views/not_found/not_found.vue");
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main/analysis/overview"
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/main",
    name: "Main",
    component: Main
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFount",
    component: notFount
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token");
    if (!token) {
      console.log("没有token");
      return "/login";
    }
  }
  //重定向路由
  if (to.path == "/main") {
    return firstmenu.url;
  }
});

export default router;
