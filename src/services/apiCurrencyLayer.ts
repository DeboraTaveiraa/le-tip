import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_URL_CURRENCY_LAYER,
});

export default api;
