import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1、先加载默认所有的routes

  const allRoutes: RouteRecordRaw[] = []
  // 查找main文件下所有的ts文件，true的意思是是否要递归
  const routeFiles = require.context('../router/main', true, /\.ts/)

  // routeFiles.keys() webpack的方法
  routeFiles.keys().forEach((k) => {
    // 拼接路径
    const route = require('../router/main' + k.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2、根据菜单获取需要添加的routes
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route
  // 递归函数
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        // 如果没有fristMenu的话就把拿到的menu赋值
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        // 递归函数
        _recurseGetRoute(menu.children)
      }
    }
  }
  // 调用递归函数
  _recurseGetRoute(userMenus)

  return routes
}

// 映射路由与menu的对应关系
export function pathMapToMenu(userMenus: any[], currentPath: string): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export { firstMenu }
