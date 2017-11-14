import { instance } from '../instance.js'

export const getUserInfo = () => {
  return instance.get("/v1/user/me");
};

export const logout = () => {
  return instance.get("/v1/logoutAndGetLoginUrl");
};

export const getUsers = () => {
  return instance.get("/v1/users");
};
