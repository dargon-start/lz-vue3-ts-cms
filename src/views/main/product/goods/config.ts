import { IForm } from "@/base_ui/form/type/type";
//formconfig
export const formConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "商品名",
      placeholder: "请输入商品名"
    },
    {
      field: "address",
      type: "input",
      label: "商品产地",
      placeholder: "请输入商品产地"
    },
    {
      field: "status",
      type: "select",
      label: "状态",
      options: [
        { title: "启用", value: "启用" },
        { title: "禁用", value: "禁用" }
      ]
    },
    {
      field: "createAt",
      type: "datepicker",
      label: "创建时间",
      otherOptions: {
        isRange: true,
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange"
      }
    }
  ],
  labelWidth: "100px",
  colLayout: {
    xl: 6, // >1920px 4个
    lg: 8,
    md: 12,
    sm: 12,
    xs: 24
  }
};

//tableconfig
export const tableConfig = {
  title: "商品列表",
  listConfig: [
    { prop: "name", label: "商品名", minWidth: "80px" },
    { prop: "oldPrice", label: "旧价格", minWidth: "60px" },
    { prop: "newPrice", label: "新价格", minWidth: "60px" },
    { prop: "status", label: "状态", minWidth: "60px", slotName: "status" },
    {
      prop: "imgUrl",
      label: "商品图片",
      minWidth: "100px",
      slotName: "imgUrl"
    },
    { prop: "address", label: "地址", minWidth: "80px" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "150px",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "150px",
      slotName: "updateAt"
    },
    { label: "操作", minWidth: "100px", slotName: "option" }
  ],
  showIndexColumn: true,
  showSelectColumn: true
};
