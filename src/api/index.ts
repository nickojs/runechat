import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: import.meta.env.VITE_API_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

// uncomment when implemented
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;