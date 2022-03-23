<template>
  <div class="show-List">
    <div class="header">
      <h3>{{ title }}</h3>
      <slot name="header"> </slot>
    </div>
    <el-table
      :data="pageList"
      border
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        label="序号"
        align="center"
      />
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
      />
      <template v-for="item in listConfig" :key="item.prop">
        <el-table-column v-bind="item" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30, 40]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, PropType, defineEmits } from "vue";
import { IlistConfig } from "../type/type";
const props = defineProps({
  showSelectColumn: {
    type: Boolean,
    default: false
  },
  showIndexColumn: { type: Boolean, default: false },
  pageList: {
    type: Array,
    required: true
  },
  listConfig: {
    type: Array as PropType<IlistConfig[]>,
    required: true
  },
  totalCount: {
    type: Number
  },
  page: {
    type: Object,
    default: () => ({ currentPage: 1, pageSize: 10 })
  },
  title: {
    type: String
  },
  childrenProps: {
    type: Object
  }
});
const emit = defineEmits(["selectVal", "update:page", "handleCurrentChange"]);
const handleSelectionChange = (val: any) => {
  emit("selectVal", val);
};

const handleSizeChange = (pageSize: number) => {
  console.log("size");
  emit("update:page", { ...props.page, pageSize });
};
const handleCurrentChange = (currentPage: number) => {
  console.log("current");
  emit("update:page", { ...props.page, currentPage });
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.footer {
  display: flex;
  justify-content: right;
  margin-top: 10px;
}
.option {
  text-align: center;
}
</style>
