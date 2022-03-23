import axios from "axios";
import type { AxiosInstance } from "axios";
import { HyRequestInterceptor, HYRequestConfig } from "./type";
import { ElLoading } from "element-plus";
// import { ElLoadingService } from "element-plus/es/components/loading/index";

const DEAFULT_LOADING = true;
class LZRequest {
  instance: AxiosInstance;
  interceptors?: HyRequestInterceptor;
  showLoading: boolean;
  loading?: any;
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.intercetors;
    //默认情况下显示showloading
    this.showLoading = config.showLoading ?? DEAFULT_LOADING;
    //拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    //公共拦截器
    this.instance.interceptors.request.use(
      (config) => {
        //loading
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "正在请求数据....",
            background: "rgba(0, 0, 0, 0.5)"
          });
        }
        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close();
        const data = res.data;
        return data;
      },
      (err) => {
        console.log("全局响应拦截失败");
        this.loading?.close();
        if (err.response.status === 404) {
          console.log("404错误");
        }
        return err;
      }
    );
  }

  request<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.intercetors?.requestInterceptor) {
        config = config.intercetors.requestInterceptor(config);
      }
      // 2.判断是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.intercetors?.responseInterceptor) {
            res = config.intercetors.responseInterceptor(res);
          }
          // 2.将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING;
          resolve(res);
        })
        .catch((err) => {
          // 2.将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING;
          reject(err);
        });
    });
  }

  get<T = any>(config: HYRequestConfig<T>) {
    return this.request<T>({
      ...config,
      method: "GET"
    });
  }
  post<T = any>(config: HYRequestConfig<T>) {
    return this.request<T>({
      ...config,
      method: "POST"
    });
  }
  patch<T = any>(config: HYRequestConfig<T>) {
    return this.request<T>({
      ...config,
      method: "PATCH"
    });
  }
  delete<T = any>(config: HYRequestConfig<T>) {
    return this.request<T>({
      ...config,
      method: "DELETE"
    });
  }
}

export default LZRequest;
