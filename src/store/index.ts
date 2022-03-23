import { createStore, Store, useStore as useVuexStore } from "vuex";
import loginModule from "./login/login";
import systemModule from "./main/system/user/user";
import analysisModule from "./main/analysis/analysis";
import { IrootState, IStoreType } from "./type";
import { getListInfo } from "@/service/main/system/system";
const store = createStore<IrootState>({
  state: {
    name: "",
    password: "",
    entireDepartment: [],
    entireRole: [],
    entireMenu: []
  },
  mutations: {
    updateEntireDepartment(state, entireDepartment) {
      state.entireDepartment = entireDepartment;
    },
    updateRole(state, entireRole) {
      state.entireRole = entireRole;
    },
    updateMenu(state, entireMenu) {
      state.entireMenu = entireMenu;
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      const deparmentList = await getListInfo("/department/list", {
        offset: 0,
        size: 100
      });
      commit("updateEntireDepartment", deparmentList.data.list);
      const roleList = await getListInfo("/role/list", {
        offset: 0,
        size: 100
      });
      commit("updateRole", roleList.data.list);
      const menuList = await getListInfo("/menu/list");
      console.log(menuList);
      commit("updateMenu", menuList.data.list);
    }
  },
  modules: {
    loginModule,
    systemModule,
    analysisModule
  }
});
export function setupStore() {
  store.dispatch("loginModule/loadLocalLogin");
  // store.dispatch("getInitialDataAction");
}

export function useStore(): Store<IStoreType> {
  return useVuexStore();
}
export default store;
