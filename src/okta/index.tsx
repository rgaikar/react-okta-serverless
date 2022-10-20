import { OktaAuth, OktaAuthOptions } from "@okta/okta-auth-js";

const REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REACT_APP_ISSUER = process.env.REACT_APP_ISSUER;
const REDIRECT_URI = `${window.location.origin}/login/callback`;

const config: OktaAuthOptions = {
  clientId: REACT_APP_CLIENT_ID,
  issuer: REACT_APP_ISSUER,
  redirectUri: REDIRECT_URI,
  scopes: ["openid", "profile", "email"],
  pkce: true,
  maxClockSkew: 900, // 15 Min, Default 5 Min
  tokenManager: {
    autoRenew: true,
  },
};

const oktaAuth = new OktaAuth(config);

export default oktaAuth;
