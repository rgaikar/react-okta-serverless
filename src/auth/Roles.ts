// Map Okta Group Roles to Local Roles
enum Roles {
  // Dev / Test Okta Roles
  "Okta-role-dev-admin" = "Okta-role-test-admin",
  "Okta-role-dev-developer" = "Okta-role-test-developer",

  // Production Okta Roles
  "Okta-role-prod-admin" = "Okta-role-prod-admin",
  "Okta-role-prod-developer" = "Okta-role-prod-developer",

  // Common / General User
  "Okta-role-user" = "Okta-role-user"
}
export default Roles;
