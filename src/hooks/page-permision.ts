import { useStore } from "@/store";
export function usePermision(pageName: string, handName: string) {
  const store = useStore();
  const permission = store.state.loginModule.permission;
  return !!permission.find((item) => `system:${pageName}:${handName}` === item);
}
