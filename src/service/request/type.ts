import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface HyRequestInterceptor<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  intercetors?: HyRequestInterceptor<T>;
  showLoading?: boolean;
}
