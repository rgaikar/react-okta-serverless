import Roles from "./Roles";
import Permissions from "./Permissions";

const AccessControl = (role: Roles) => {
  switch (role) {
    case Roles["Okta-role-dev-admin"]:
    case Roles["Okta-role-prod-admin"]:
      return [...Object.keys(Permissions)];

    case Roles["Okta-role-dev-developer"]:
      case Roles["Okta-role-prod-developer"]:
      return [Permissions.UPLOAD_DATA];

    case Roles["Okta-role-user"]:
      return [Permissions.DOWNLOAD_DATA];
 default:
      return [];
  }
};

export default AccessControl;
