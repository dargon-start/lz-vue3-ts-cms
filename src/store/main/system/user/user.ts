import {
  getListInfo,
  deleteData,
  createPageData,
  editPageData
} from "@/service/main/system/system";
import { IrootState } from "@/store/type";
import { Module } from "vuex";
import { IsystemState } from "./type";
const systemModule: Module<IsystemState, IrootState> = {
  namespaced: true,
  state: {
    usersList: [],
    usersCount: 0,
    roleList: [],
    roleCount: 0,
    goodsList: [],
    goodsCount: 0,
    menuList: [],
    menuCount: 0,
    departmentList: [],
    departmentCount: 0,
    categoryList: [],
    categoryCount: 0
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`];
      };
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`];
      };
    }
  },
  mutations: {
    updateUsersList(state, list) {
      state.usersList = list;
    },
    updateUsersCount(state, totalCount: number) {
      state.usersCount = totalCount;
    },
    updateRoleList(state, list) {
      state.roleList = list;
    },
    updateRoleCount(state, totalCount: number) {
      state.roleCount = totalCount;
    },
    updateGoodsList(state, list) {
      state.goodsList = list;
    },
    updateGoodsCount(state, totalCount: number) {
      state.goodsCount = totalCount;
    },
    updateMenuList(state, list) {
      state.menuList = list;
    },
    updateMenuCount(state, totalCount: number) {
      state.menuCount = totalCount;
    },
    updateDepartmentList(state, list) {
      state.departmentList = list;
    },
    updateDepartmentCount(state, totalCount: number) {
      state.departmentCount = totalCount;
    },
    updateCategoryList(state, list) {
      state.categoryList = list;
    },
    updateCategoryCount(state, totalCount: number) {
      state.categoryCount = totalCount;
    }
  },
  actions: {
    //获取list数据
    async getPage({ commit }, payload: any) {
      const { pageName, queryInfo } = payload;
      const pageUrl = `/${pageName}/list`;

      const res = await getListInfo(pageUrl, queryInfo);
      switch (pageName) {
        case "users":
          commit("updateUsersList", res.data.list);
          commit("updateUsersCount", res.data.totalCount);
          break;
        case "role":
          commit("updateRoleList", res.data.list);
          commit("updateRoleCount", res.data.totalCount);
          break;
        case "goods":
          commit("updateGoodsList", res.data.list);
          commit("updateGoodsCount", res.data.totalCount);
          break;
        case "menu":
          commit("updateMenuList", res.data.list);
          commit("updateMenuCount", res.data.totalCount);
          break;
        case "department":
          commit("updateDepartmentList", res.data.list);
          commit("updateDepartmentCount", res.data.totalCount);
          break;
        case "category":
          commit("updateCategoryList", res.data.list);
          commit("updateCategoryCount", res.data.totalCount);
      }
    },
    //删除一条数据
    async deletePageDateAction({ dispatch }, payload: any) {
      //组合url
      const { pageName, id } = payload;
      const url = `${pageName}/${id}`;
      await deleteData(url);

      //删除后重新请求数据
      dispatch("getPage", {
        pageName,
        queryInfo: { offset: 0, size: 10 }
      });
    },
    //添加
    async createPageDataAction({ dispatch }, payload: any) {
      const { pageName, newData } = payload;
      await createPageData(`/${pageName}`, newData);

      //重新请求数据
      dispatch("getPage", {
        pageName,
        queryInfo: { offset: 0, size: 10 }
      });
    },
    //修改
    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, editData, id } = payload;
      await editPageData(`/${pageName}/${id}`, editData);
      //重新请求数据
      dispatch("getPage", {
        pageName,
        queryInfo: { offset: 0, size: 10 }
      });
    }
  }
};

export default systemModule;
