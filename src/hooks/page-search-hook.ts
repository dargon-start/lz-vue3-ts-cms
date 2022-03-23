import { ref } from "vue";
import page_contentVue from "@/components/page_content/src/page_content.vue";

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof page_contentVue>>();

  const handClear = () => {
    pageContentRef.value?.getPageInfo();
  };

  const handSearch = (queryInfo: any) => {
    pageContentRef.value?.getPageInfo(queryInfo);
  };

  return [pageContentRef, handClear, handSearch];
}
