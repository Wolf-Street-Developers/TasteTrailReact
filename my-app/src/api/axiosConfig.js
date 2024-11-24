import axios from 'axios';
import { getAccessToken, refreshAccessToken } from './authService';

axios.interceptors.request.use(
  async (config) => {
    const token = getAccessToken(); // Get the access token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add token to request headers
    }
    return config; // Return the modified config
  },
  (error) => {
    return Promise.reject(error); // Handle request error
  }
);

axios.interceptors.response.use(
  async(response) => {
    return response; // Return the response directly
  },
  async (error) => {
    const originalRequest = error.config;
    // Check if the error is due to an expired token
    if (error.response?.status === 401) {
      if(originalRequest._retry || (localStorage.getItem('accessToken') === null)) {
        console.log(window.location)
        if(window.location.pathname === '/login' || window.location.pathname === '/signup') {
          return
        }
        window.location.href = '/login';
      } else {
        originalRequest._retry = true; // Mark the request as retried

        try {
          // Attempt to refresh the token
          const newAccessToken = await refreshAccessToken();
          axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axios(originalRequest); // Retry the original request
        } catch (err) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          console.error('Token refresh failed:', err);
        }


      }
    }

    if(localStorage.getItem("accessToken")==="" && localStorage.getItem("refreshToken")==="") {
      window.location.href = '/login';
    }

    return Promise.reject(error); // Return the error for further handling
  }
);
