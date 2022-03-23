<template>
  <div class="dashboard">
    <el-row gutter="10" class="row">
      <template v-for="item in panelCount" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <page_countUp
            :Data="item"
            :prefiex="item.amount == 'saleroom' ? '￥' : ''"
          ></page_countUp>
        </el-col>
      </template>
    </el-row>
    <el-row gutter="10" class="row">
      <el-col :md="24" :lg="7" :xl="7">
        <lzCard title="分类商品数量(饼图)">
          <pie_echart :data="categoryCount"></pie_echart>
        </lzCard>
      </el-col>
      <el-col :md="24" :lg="10" :xl="10">
        <lzCard title="不同城市商品销量">
          <map_echart :data="categoryAddressSale"></map_echart>
        </lzCard>
      </el-col>
      <el-col :md="24" :lg="7" :xl="7">
        <lzCard title="分类商品数量(玫瑰图)">
          <rose_echart :data="categoryCount"></rose_echart>
        </lzCard>
      </el-col>
    </el-row>
    <el-row class="row" gutter="10">
      <el-col :xs="24" :md="12" :lg="12" :xl="12">
        <lzCard title="分类商品的销量">
          <line_echart :data="categorySale"></line_echart>
        </lzCard>
      </el-col>
      <el-col :xs="24" :md="12" :lg="12" :xl="12">
        <lzCard title="分类商品的收藏">
          <bar_echart :data="categoryFavor"></bar_echart>
        </lzCard>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from "vue";
import { useStore } from "@/store";
import lzCard from "@/base_ui/card";
import {
  pie_echart,
  rose_echart,
  line_echart,
  bar_echart,
  map_echart
} from "@/components/page_echarts/index";
import page_countUp from "@/components/page-CountUp/index";
const store = useStore();

//请求数据
onMounted(() => {
  store.dispatch("analysisModule/getCategoryInfo");
});

//顶部滚动数字的数据
const panelCount = computed(() => {
  return store.state.analysisModule.panelCount;
});

//获取商品分类数量
const categoryCount = computed(() => {
  return store.state.analysisModule.categoryCount.map((item) => ({
    name: item.name,
    value: item.goodsCount
  }));
});
//获取商品销售量
const categorySale = computed(() => {
  const nameList: string[] = [];
  const valueList: number[] = [];
  store.state.analysisModule.categorySale.map((item: any) => {
    nameList.push(item.name);
    valueList.push(item.goodsCount);
  });
  return { nameList, valueList };
});
//获取商品收藏量
const categoryFavor = computed(() => {
  const nameList: string[] = [];
  const valueList: number[] = [];
  store.state.analysisModule.categoryFavor.map((item: any) => {
    nameList.push(item.name);
    valueList.push(item.goodsFavor);
  });
  return { nameList, valueList };
});

//获取城市销售量
const categoryAddressSale = computed(() => {
  return store.state.analysisModule.categoryAddressSale.map((item) => ({
    name: item.address,
    value: item.count
  }));
});
</script>

<style scoped lang="less">
.dashboard {
  width: 100%;
  background-color: #f5f5f5;
  .row {
    margin-top: 10px;
  }
}
</style>
