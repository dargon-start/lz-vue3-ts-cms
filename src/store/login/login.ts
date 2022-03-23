import { Module } from "vuex";
import { ILoginState } from "./type";
import { IrootState } from "../type";
import { Iacount } from "@/service/login/type";
import {
  acountLoginRequest,
  userInforRequest,
  userMenusRequest
} from "@/service/login/login";
import localCache from "@/utils/cache";
import { mapUrlToRoutes, mapMenusToPermissions } from "@/utils/menuMapRoutes";
import router from "@/router";
const loginModule: Module<ILoginState, IrootState> = {
  namespaced: true,
  state: {
    token: "",
    userInfo: {},
    userMenus: {},
    permission: []
  },
  mutations: {
    changeToken(state, token) {
      state.token = token;
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus;

      //动态生成路由
      const routes = mapUrlToRoutes(userMenus);

      //2.将routes添加到main的chidlren中
      routes.forEach((route) => {
        router.addRoute("Main", route);
      });
      //保存权限
      const permission = mapMenusToPermissions(userMenus);
      state.permission = permission;
    }
  },
  actions: {
    async loginAount({ commit, dispatch }, payload: Iacount) {
      //1.登录，获取token
      const res = await acountLoginRequest(payload);
      const { id, token } = res.data;
      commit("changeToken", token);
      localCache.setCache("token", token);

      //初始化
      dispatch("getInitialDataAction", null, { root: true });
      //2.请求用户信息
      const userInfo = await userInforRequest(id);
      commit("changeUserInfo", userInfo.data);
      localCache.setCache("userInfo", userInfo.data);
      //3.获取角色信息
      const userMenus = await userMenusRequest(id);
      commit("changeUserMenus", userMenus.data);
      localCache.setCache("userMenus", userMenus.data);
      //调到首页
      router.push("/main");
    },
    loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getCache("token");
      if (token) {
        commit("changeToken", token);
        //初始化
        dispatch("getInitialDataAction", null, { root: true });
      }

      const userInfo = localCache.getCache("userInfo");
      if (userInfo) {
        commit("changeUserInfo", userInfo);
      }
      const userMenus = localCache.getCache("userMenus");
      if (userMenus) {
        commit("changeUserMenus", userMenus);
      }
    }
  },
  modules: {}
};

export default loginModule;
