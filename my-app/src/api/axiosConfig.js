import axios from 'axios';
import { getAccessToken, refreshAccessToken } from './authService';

// Set up Axios request interceptor globally
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

// Set up Axios response interceptor globally
axios.interceptors.response.use(
  (response) => {
    return response; // Return the response directly
  },
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is due to an expired token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark the request as retried

      try {
        // Attempt to refresh the token
        const newAccessToken = await refreshAccessToken();
        axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axios(originalRequest); // Retry the original request
      } catch (err) {
        console.error('Token refresh failed:', err);
        // Optionally log out the user or redirect to the login page
      }
    }

    return Promise.reject(error); // Return the error for further handling
  }
);
