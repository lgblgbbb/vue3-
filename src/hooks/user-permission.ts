import { useStore } from '@/store'

export function userPermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system${pageName}:${handleName}`
  //    !!取反 树的结构
  return !!permissions.find((item) => item === verifyPermission)
}
