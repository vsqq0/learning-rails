import axios from "axios";
import querystring from "querystring";
import { errorCodeConfig } from "./constant";
import Cookie from "./cache";
import { toLogin } from "./index";

/**
 * 获取系统语言
 * @returns {*|string|string}
 */
export function getSysLang() {
  let sysLang = Cookie.get("language") || navigator.language.toLowerCase();
  if (["zh-cn", "en-us"].indexOf(sysLang) === -1) {
    sysLang = "en-us";
  }
  return sysLang || "zh-cn";
}

// export let baseURL = process.env.VUE_APP_HTTP_BASE_URL + "/peersfer";// /api/
export const baseURL = "/api/";

export const headers = () => {
  const header = {
    loginType: 0,
    token: Cookie.get("token"),
    "accept-language": "zh-cn", //getSysLang(), //"en-us",
    appId: Cookie.get("appId"),
    sign: Cookie.get("sign")
  };
  return header;
};

const ajax = axios.create({
  timeout: 30000,
  headers: headers(),
  paramsSerializer: params => querystring.stringify(params),
  validateStatus: function(status) {
    return status >= 200 && status < 300; // default
  }
});

// 响应拦截器
ajax.interceptors.response.use(
  config => {
    const data = config.data;
    if (data && !data.success) {
      if (data && data.code === 101010001) {
        Cookie.set("token","");
        Cookie.set("sign", "");
        Cookie.set("appId","");
        Cookie.set("name", "");
        toLogin();
      } else {
        alert(data && data.message);
      }
    }
    return data;
  },
  err => {
    if (err && err.response) {
      const status = err.response.status;
      let errorMessage = errorCodeConfig[status];
      if (status === 404) {
        errorMessage = `${errorMessage}${err.response.config.url}`;
      }
      err.message = errorMessage;
    }
    return Promise.reject(err);
  }
);

/**
 * @param {string} url 必填
 * @returns {Object} params
 */
export const get = async (url, params) => {
  try {
    return await ajax({
      method: "get",
      url: baseURL + url + "?" + querystring.stringify(params),
      headers: headers()
    });
  } catch (error) {
    console.warn(error);
    return { success: false, data: "" };
  }
};

/**
 * @param {string} url 必填
 * @returns {Object} params
 */
export const post = async (url, params) => {
  try {
    return await ajax({
      method: "post",
      url: baseURL + url + "?" + querystring.stringify(params),
      headers: headers()
    });
  } catch (error) {
    console.warn(error);
    return { success: false, data: "" };
  }
};

export default ajax;
