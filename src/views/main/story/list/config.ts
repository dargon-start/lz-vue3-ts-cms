//tableconfig
export const tableConfig = {
  title: "留言列表",
  listConfig: [
    { prop: "name", label: "用户名", minWidth: "80px" },
    { prop: "content", label: "内容", minWidth: "150px" },
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
    }
  ],
  showIndexColumn: true,
  showSelectColumn: false
};
