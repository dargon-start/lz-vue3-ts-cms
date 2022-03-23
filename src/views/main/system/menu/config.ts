//tableconfig
export const tableConfig = {
  title: "菜单列表",
  listConfig: [
    { prop: "name", label: "菜单名称", minWidth: "100px" },
    { prop: "type", label: "类型", minWidth: "60px" },
    { prop: "url", label: "菜单url", minWidth: "100px" },
    { prop: "icon", label: "菜单icon", minWidth: "100px" },
    { prop: "permission", label: "按钮权限", minWidth: "100px" },
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
  childrenProps: {
    rowKey: "id",
    treeProps: { children: "children" }
  },
  showIndexColumn: false,
  showSelectColumn: false
};
