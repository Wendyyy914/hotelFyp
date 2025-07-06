import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
    //baseURL: "http://192.168.13.236:5001/api", 
    baseURL: "https://localhost:7246/api",
    withCredentials: false, // Ensure cookies are sent
  });
  
  // Add an interceptor to attach the token to every request
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)

    
  );

  export const clearAuthHeader = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    delete axiosInstance.defaults.headers["Authorization"]; // Remove the Authorization header from Axios
  };
  
  export default axiosInstance;