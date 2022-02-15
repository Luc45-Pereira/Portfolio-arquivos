import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

api.interceptors.request.use(async config => {
  // Declaramos um token manualmente para teste.
  const token = "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";

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;