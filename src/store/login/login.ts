import { Module } from 'vuex'
import { ILoginState } from './type'
import { IRootState } from '../type'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenus
} from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import localCache from '@/utils/cache'
import router from '@/router'

const loginModeule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1、实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      localCache.setCache('token', token)
      commit('changeToken', token)

      // 2、请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3、请求用户的菜单
      const userMenuResult = await requestUserMenus(userInfo.role.id)
      const userMenus = userMenuResult.data
      userMenus.icon = userMenus.forEach((i: any) => {
        if (i.icon) {
          return (i.icon = i.icon = i.icon.slice(8))
        }
      })
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      // 4、跳到首页去
      router.push('/main')
    },
    // 刷新不丢失数据
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModeule
