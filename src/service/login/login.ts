import gbRequest from '../index'
import { IAccount, ILoginResult, IDataType } from './type'

// 枚举
enum LoginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // /users/1
  UserMenus = '/role/' //用法: role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return gbRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return gbRequest.get<IDataType>({
    url: LoginApi.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenus(id: number) {
  return gbRequest.get<IDataType>({
    url: LoginApi.UserMenus + id + '/menu',
    showLoading: false
  })
}
