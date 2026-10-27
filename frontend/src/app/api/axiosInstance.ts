import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const publicApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Internal-Service": "frontend",
  },
});

export const privateApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Internal-Service": "frontend",
  },
});

privateApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err),
);

privateApi.interceptors.response.use(
  (response) => response,
  async (err) => {
    const originalRequest = err.config;

    if (originalRequest?.public) {
      return Promise.reject(err);
    }

    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await axios.post(
          `${BASE_URL}/graphql`,
          {
            query: `
          mutation RefreshToken {
              refreshToken {
                access_token
              }
            }
          `,
          },
          {
            withCredentials: true,
          },
        );

        const newAccessToken = response.data?.data?.refreshToken?.access_token;

        if (newAccessToken) {
          localStorage.setItem("access_token", newAccessToken);
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return privateApi(originalRequest);
        }
      } catch (refreshErr) {
        localStorage.removeItem("access_token");

        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
        return Promise.reject(refreshErr);
      }
    }
    return Promise.reject(err);
  },
);
