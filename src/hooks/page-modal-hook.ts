import { ref } from "vue";
import page_modal from "@/components/page_modal/src/page_modal.vue";
type callBackFn = (val?: any) => void;
export function usePageModal(createCb?: callBackFn, editCb?: callBackFn) {
  const pageModalRef = ref<InstanceType<typeof page_modal>>();
  const definalInfo = ref({});
  const handleCreate = () => {
    if (pageModalRef.value) {
      definalInfo.value = {};
      pageModalRef.value.centerDialogVisible = true;
    }
    createCb && createCb();
  };
  const handleEdit = (val: any) => {
    if (pageModalRef.value) {
      console.log(val);
      definalInfo.value = { ...val };
      pageModalRef.value.centerDialogVisible = true;
    }
    editCb && editCb(val);
  };
  return [pageModalRef, definalInfo, handleCreate, handleEdit];
}
