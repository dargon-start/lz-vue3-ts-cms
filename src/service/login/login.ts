import lzRequest from "../request";
import { Iacount, IDataType, ILoginResult } from "./type";
enum Login_API {
  aountLogin = "/login",
  userInfo = "/users/",
  userMenus = "/role/"
}
export function acountLoginRequest(acount: Iacount) {
  return lzRequest.post<IDataType<ILoginResult>>({
    url: Login_API.aountLogin,
    data: acount
  });
}

export function userInforRequest(id: number) {
  return lzRequest.get<IDataType>({
    url: Login_API.userInfo + id,
    showLoading: false
  });
}

export function userMenusRequest(id: number) {
  return lzRequest.get<IDataType>({
    url: Login_API.userMenus + id + "/menu",
    showLoading: false
  });
}
