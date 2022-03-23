import { IForm } from "@/base_ui/form/type/type";
//formconfig
export const formConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名"
    },
    {
      field: "realname",
      type: "input",
      label: "姓名",
      placeholder: "请输入姓名"
    },
    {
      field: "cellphone",
      type: "input",
      label: "电话",
      placeholder: "请输入电话号码"
    },
    {
      field: "enable",
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
  title: "用户列表",
  listConfig: [
    { prop: "name", label: "用户名", minWidth: "80px" },
    { prop: "realname", label: "真实姓名", minWidth: "80px" },
    { prop: "cellphone", label: "电话", minWidth: "100px" },
    { prop: "enable", label: "状态", minWidth: "60px", slotName: "enable" },
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
      label: "用户名",
      placeholder: "请输入用户名"
    },
    {
      field: "realname",
      type: "input",
      label: "姓名",
      placeholder: "请输入姓名"
    },
    {
      field: "password",
      type: "input",
      label: "密码",
      placeholder: "请输入密码",
      isHidden: false
    },
    {
      field: "cellphone",
      type: "input",
      label: "电话",
      placeholder: "请输入电话号码"
    },
    {
      field: "departmentId",
      type: "select",
      label: "选择部门",
      placeholder: "请选择部门",
      options: []
    },
    {
      field: "roleId",
      type: "select",
      label: "选择角色",
      placeholder: "请选择角色",
      options: []
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
