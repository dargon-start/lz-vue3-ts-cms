import LZrequest from "./request/index";
import { BASE_URL, TIME_OUT } from "./request/config";
import localCache from "@/utils/cache";
const lzRequest = new LZrequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  intercetors: {
    requestInterceptor: (config) => {
      //携带token
      const token = localCache.getCache("token");
      if (token) {
        if (config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    },
    requestInterceptorCatch(err) {
      return err;
    },
    responseInterceptor(res) {
      return res;
    },
    responseInterceptorCatch(err) {
      return err;
    }
  }
});

export default lzRequest;
