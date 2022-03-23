import lzRequest from "../../request";
import { IDataType } from "@/service/type";
export function getListInfo(url: string, data?: any) {
  return lzRequest.post<IDataType>({
    url,
    data
  });
}

export function deleteData(url: string) {
  return lzRequest.delete<IDataType>({
    url
  });
}

export function createPageData(url: string, newData: any) {
  return lzRequest.post<IDataType>({
    url: url,
    data: newData
  });
}

export function editPageData(url: string, editData: any) {
  return lzRequest.patch<IDataType>({
    url: url,
    data: editData
  });
}
