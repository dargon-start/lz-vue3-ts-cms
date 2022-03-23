import { Module } from "vuex";
import { IanalysisType } from "./type";
import { IrootState } from "@/store/type";
import {
  getCategoryCount,
  getCategorySale,
  getCategoryFavor,
  getAddressSale,
  getPanelCount
} from "@/service/main/analysis/analysis";
const analysisModule: Module<IanalysisType, IrootState> = {
  namespaced: true,
  state: {
    panelCount: [],
    categoryCount: [],
    categorySale: [],
    categoryFavor: [],
    categoryAddressSale: []
  },
  mutations: {
    changePanelCount(state, list) {
      state.panelCount = list;
    },
    changeCategoryCount(state, list) {
      state.categoryCount = list;
    },
    changeCategorySale(state, list) {
      state.categorySale = list;
    },
    changeCategoryFavor(state, list) {
      state.categoryFavor = list;
    },
    changeCategoryAddressSale(state, list) {
      state.categoryAddressSale = list;
    }
  },
  actions: {
    async getCategoryInfo({ commit }) {
      const resCountList = await getPanelCount();
      commit("changePanelCount", resCountList.data);
      const resCount = await getCategoryCount();
      commit("changeCategoryCount", resCount.data);
      const resSale = await getCategorySale();
      commit("changeCategorySale", resSale.data);
      const resFavor = await getCategoryFavor();
      commit("changeCategoryFavor", resFavor.data);
      const resAddressSale = await getAddressSale();
      commit("changeCategoryAddressSale", resAddressSale.data);
    }
  }
};

export default analysisModule;
