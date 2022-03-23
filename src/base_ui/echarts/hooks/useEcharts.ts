import * as echarts from "echarts";
import { EChartsOption } from "echarts";
// 注册中国地图
import chinaJson from "../data/china.json";
echarts.registerMap("china", chinaJson);

export function useEcharts(domEl: HTMLElement, theme = "light") {
  //初始化echarts
  const echartsInstance = echarts.init(domEl, theme, { renderer: "svg" });
  //设置options
  const setOption = (options: EChartsOption) => {
    echartsInstance.setOption(options);
  };

  window.addEventListener("resize", function () {
    echartsInstance.resize();
  });

  return setOption;
}
