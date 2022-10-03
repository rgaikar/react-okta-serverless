import Permissions from "./Permissions";
import Roles from "./Roles";
import AccessControl from "./AccessControl";
import { isEmpty, uniq } from "lodash";

// Get User Permissions Based on Roles (groups in id_token)
const getUserPermissions = (roles: Roles[]) => {
  // Filter Roles based on Environemnt
  const _roles =
    process.env.REACT_APP_ENVIRONEMNT === "production"
      ? roles.filter((role: any) => role.includes("prod"))
      : roles.filter((role: any) => role.includes("test"));

  if (!isEmpty(_roles)) {
    return uniq(
      _roles?.reduce((permissions: any, role: any) => {
        return [...permissions, ...AccessControl(role)];
      }, [])
    );
  }
  return [];
};


// Check if User has Permission
const hasPermission = (roles: Roles[], permission: Permissions) => {
  return roles.some((role: any) => AccessControl(role).includes(permission));
};

export { hasPermission, getUserPermissions };
