import apiClient from "./client";

const endpoint = "/for_you";

const getForYou = () =>
  apiClient.get(endpoint).then((res) => {
    return res;
  });

export default {
  getForYou,
};