import { IForm } from "@/base_ui/form/type/type";
//formconfig
export const formConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "部门",
      placeholder: "请输入部门名"
    },
    {
      field: "parentId",
      type: "input",
      label: "部门号",
      placeholder: "请输入部门号"
    },
    {
      field: "leader",
      type: "input",
      label: "负责人",
      placeholder: "请输入负责人姓名"
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
  title: "部门列表",
  listConfig: [
    { prop: "name", label: "部门", minWidth: "80px" },
    { prop: "parentId", label: "部门号", minWidth: "80px" },
    { prop: "leader", label: "负责人", minWidth: "100px" },
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

//modalconfig
export const modalconfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "部门",
      placeholder: "请输入部门名"
    },
    {
      field: "parentId",
      type: "input",
      label: "部门号",
      placeholder: "请输入部门号"
    },
    {
      field: "leader",
      type: "input",
      label: "负责人",
      placeholder: "请输入负责人姓名"
    }
  ],
  labelWidth: "80px",
  colLayout: {
    span: 24
  },
  itemStyle: {
    padding: "5px 0"
  }
};
