import axios from "axios";
import { Message } from "element-ui";

const baseURL = "/hades2/api/";
const timeout = 20000;

export const instance = axios.create({
  baseURL,
  timeout: timeout,
  headers: { "Content-Type": "application/json" },
  withCredentials: true
});

const errorMap = {
  400: "请求失败",
  401: "未授权",
  403: "禁止访问",
  404: "地址未找到",
  499: "未登陆"
};

// 返回结果拦截器,处理默认的错误
instance.interceptors.response.use(
  function(response) {
    // 正常的请求前拦截,在这里处理
    return response.data;
  },
  function(error) {
    // 非200请求时的错误处理
    if (error.response) {
      const res = error.response.data; // 请求data
      const status = error.response.status; // 请求状态吗
      const message = res.message || (res.errors && res.errors[0].message); //错误消息

      if (status === 499) {
        window.location.href = res.url;
      } else {
        Message({
          message: message || errorMap[status],
          type: "error",
          showClose: true
        });
      }
    } else {
      Message({
        message: error.code + ": " + error.message,
        type: "error",
        showClose: true
      });
    }
    // Do something with response error
    return Promise.reject(error);
  }
);
