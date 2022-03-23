import { IcrumbType } from "@/base_ui/breadCrumb/type";
import { RouteRecordRaw } from "vue-router";
let firstmenu: any;
export function mapUrlToRoutes(userMenus: any): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  //1.加载所有的routes，创建于url的映射表
  const allRoutes: RouteRecordRaw[] = [];

  const routesFiles = require.context("../router/main", true, /\.ts/);
  routesFiles.keys().forEach((key) => {
    const route = require("../router/main" + key.split(".")[1]);
    allRoutes.push(route.default);
  });

  function _recurseGetRouteeco(menus: any) {
    for (const menu of menus) {
      if (menu.type == 2) {
        const route = allRoutes.find((route) => route.path == menu.url);
        if (route) {
          routes.push(route);
        }
        if (!firstmenu) {
          firstmenu = menu;
        }
      } else {
        _recurseGetRouteeco(menu.children);
      }
    }
  }
  _recurseGetRouteeco(userMenus);

  return routes;
}
export function urlMapCrumb(menus: any[], curPath: string): any {
  const crumbItems: IcrumbType[] = [];
  finfMenuId(menus, curPath, crumbItems);
  return crumbItems;
}

export function finfMenuId(
  menus: any[],
  curPath: string,
  crumbItems?: IcrumbType[]
): any {
  for (const menu of menus) {
    if (menu.type == 2 && menu.url == curPath) {
      return menu;
    } else {
      const findMenu = finfMenuId(menu.children ?? [], curPath);
      if (findMenu) {
        crumbItems?.push({ name: menu.name, url: menu.url });
        crumbItems?.push({ name: findMenu.name, url: findMenu.url });
        return findMenu;
      }
    }
  }
}
//收集权限
export function mapMenusToPermissions(userMenus: any[]) {
  const permission: string[] = [];
  function _recurseGetRouteeco(menus: any[]) {
    for (const menu of menus) {
      if (menu.type == 1 || menu.type == 2) {
        _recurseGetRouteeco(menu.children ?? []);
      } else if (menu.type == 3) {
        permission.push(menu.permission);
      }
    }
  }
  _recurseGetRouteeco(userMenus);
  return permission;
}
//收集菜单id
export function mapMenuesToId(userMenus: any[]) {
  const meunsId: any[] = [];
  function _recurseGetRouteeco(menus: any[]) {
    for (const menu of menus) {
      if (menu.children) {
        _recurseGetRouteeco(menu.children);
      } else {
        meunsId.push(menu.id);
      }
    }
  }
  _recurseGetRouteeco(userMenus);

  return meunsId;
}
export { firstmenu };
