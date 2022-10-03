import { OktaAuth } from "@okta/okta-auth-js";

const REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REACT_APP_ISSUER = process.env.REACT_APP_ISSUER;
const OKTA_TESTING_DISABLEHTTPSCHECK =
  process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;
const REDIRECT_URI = `${window.location.origin}/login/callback`;

const config = {
  oidc: {
    clientId: REACT_APP_CLIENT_ID,
    issuer: REACT_APP_ISSUER,
    redirectUri: REDIRECT_URI,
    scopes: ["openid", "profile", "email"],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
};

const oktaAuth = new OktaAuth(config.oidc);

export default oktaAuth;
