import lzRequest from "@/service/request";
//商品统计数据
export function getPanelCount() {
  return lzRequest.get({
    url: "/goods/amount/list"
  });
}

//分类商品的个数
export function getCategoryCount() {
  return lzRequest.get({
    url: "/goods/category/count"
  });
}
//分类商品销售量
export function getCategorySale() {
  return lzRequest.get({
    url: "/goods/category/sale"
  });
}
//分类商品收藏量
export function getCategoryFavor() {
  return lzRequest.get({
    url: "/goods/category/favor"
  });
}

//不同城市的销售量
export function getAddressSale() {
  return lzRequest.get({
    url: "/goods/address/sale"
  });
}
