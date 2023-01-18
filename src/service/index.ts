import GBquset from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

// service 统一出口

const gbRequest = new GBquset({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = localCache.getCache('token')
      if (token && typeof config.headers?.set === 'function') {
        config.headers.set('Authorization', `Bearer ${token}`)
      }

      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default gbRequest
