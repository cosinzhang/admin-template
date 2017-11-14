import { instance } from '../instance.js'

export const getAppConfig = (appName) => {
    return instance.get(`/v1/config/${appName}`)
};

export const modifyConfig = (appName, config) => {
  return instance.post(`/v1/config/${appName}`, config);
};