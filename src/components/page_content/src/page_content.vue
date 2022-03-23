<template>
  <div class="page_content">
    <lzTable
      @selectVal="selectVal"
      v-bind="tableConfig"
      :pageList="pageList"
      :totalCount="pageCount"
      v-model:page="paginationInfo"
    >
      <template #header>
        <div>
          <el-button v-if="isCreate" @click="addUserbtn">添加数据</el-button>
        </div>
      </template>
      <!-- table插槽 -->
      <template #enable="scope">
        <el-button
          :type="scope.row.enable ? 'success' : 'danger'"
          size="small"
          >{{ scope.row.enable ? "启用" : "禁用" }}</el-button
        >
      </template>
      <template #status="scope">
        <el-button
          :type="scope.row.status ? 'success' : 'danger'"
          size="small"
          >{{ scope.row.status ? "启用" : "禁用" }}</el-button
        >
      </template>
      <template #createAt="scope">
        <strong>{{ $filters.formatTime(scope.row.createAt) }}</strong>
      </template>
      <template #updateAt="scope">
        <strong>{{ $filters.formatTime(scope.row.updateAt) }}</strong>
      </template>
      <template #option="scope">
        <div class="option">
          <el-button
            v-if="isUpdate"
            type="text"
            size="small"
            :icon="Edit"
            plain
            @click="handEditBtn(scope.row)"
            >编辑</el-button
          >
          <el-button
            v-if="isDelete"
            type="text"
            size="small"
            :icon="Delete"
            plain
            @click="handDeleteBtn(scope.row)"
            >删除</el-button
          >
        </div>
      </template>
      <!-- 其他插槽 -->
      <template
        v-for="item in otherSlotNames"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
          <div></div>
        </template>
      </template>
    </lzTable>
  </div>
</template>
<script lang="ts" setup>
import { Edit, Delete } from "@element-plus/icons-vue";
import {
  computed,
  defineProps,
  defineExpose,
  ref,
  watch,
  defineEmits
} from "vue";
import lzTable from "@/base_ui/tab";
import { useStore } from "@/store";
import { usePermision } from "@/hooks/page-permision";
const props = defineProps({
  pageName: {
    type: String,
    required: true
  },
  tableConfig: {
    type: Object,
    required: true
  }
});
const emits = defineEmits(["handleEdit", "handleCreate"]);
const store = useStore();

//验证权限
const isCreate = usePermision(props.pageName, "create");
const isUpdate = usePermision(props.pageName, "update");
const isDelete = usePermision(props.pageName, "delete");
const isQuery = usePermision(props.pageName, "query");

//paginationInfo 分页器
const paginationInfo = ref({ currentPage: 1, pageSize: 10 });
watch(
  paginationInfo,
  () => {
    getPageInfo();
  },
  {
    deep: true
  }
);

//获取列表数据
function getPageInfo(querys?: any) {
  store.dispatch("systemModule/getPage", {
    pageName: props.pageName,
    queryInfo: {
      offset:
        (paginationInfo.value.currentPage - 1) * paginationInfo.value.pageSize,
      size: paginationInfo.value.pageSize,
      ...querys
    }
  });
}
getPageInfo();
//从store中获取list数据
const pageList = computed(() => {
  return store.getters["systemModule/pageListData"](props.pageName);
});
//获取count数
const pageCount = computed(() => {
  return store.getters["systemModule/pageListCount"](props.pageName);
});
//事件函数
const selectVal = (val: any) => {
  console.log(val);
};
defineExpose({
  getPageInfo
});

//获取其他slotName
const otherSlotNames = props.tableConfig.listConfig.filter((item: any) => {
  if (item.slotName === "status") return false;
  if (item.slotName === "enable") return false;
  if (item.slotName === "createAt") return false;
  if (item.slotName === "updateAt") return false;
  if (item.slotName === "option") return false;
  return true;
});
//删除按钮
const handDeleteBtn = (item: any) => {
  console.log(item);
  store.dispatch("systemModule/deletePageDateAction", {
    pageName: props.pageName,
    id: item.id
  });
};
//编辑按钮
const handEditBtn = (item: any) => {
  console.log("edit");

  emits("handleEdit", item);
};

const addUserbtn = () => {
  console.log("create");
  emits("handleCreate");
};
</script>

<style lang="less" scoped>
.page_content {
  padding: 20px;
  border-top: 20px solid #f6f6f5;
  /deep/ .el-table .el-table__cell {
    z-index: auto;
  }
}
</style>
