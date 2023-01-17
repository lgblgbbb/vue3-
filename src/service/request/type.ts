import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface gbRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface gbRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: gbRequestInterceptors<T>
  showLoading?: boolean
}
