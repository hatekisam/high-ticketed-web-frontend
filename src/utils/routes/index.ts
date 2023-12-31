export interface SideBarRoute {
  path: string;
  icon?: any;
  exact?: boolean;
  routes?: SideBarRoute[];
  name: string;
  altPaths?: string[];
  iconSize?: number;
  roleAcessible?: string[];
  hasSubRoutes?: boolean;
}
