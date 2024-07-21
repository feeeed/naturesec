import axios from "axios";

const API_URL = "http://45.67.59.209:3000";
export const request = async ({ url, method, data = {} }) => {
  const response = await axios[method](`${API_URL}/${url}`, data);
  return response.data;
};
