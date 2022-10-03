import axios from "axios";
import qs from "qs";
import oktaAuth from "../okta";

const getToken = () => {
  return oktaAuth.getAccessToken();
};

getToken();

export const getAbortController = () => {
  return new AbortController();
};

const axiosConfig = async (
  signal: AbortSignal,
  params: any = {},
  headers: any = {}
) => {
  const accessToken = await getToken();
  return axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      ...headers,
    },
    signal: signal,
    params,
    paramsSerializer: (_params: any) =>
      qs.stringify(_params, { arrayFormat: "repeat" }),
  });
};

export default axiosConfig;
