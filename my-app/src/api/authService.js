// src/api/authService.js
import axios from 'axios';
import { toast } from 'react-toastify';
import { getUserRoles } from './userService';

const API_URL = "http://135.236.96.117:5000";  // Your API base URL

// Login user
export const login = (loginIdentifier, password) => {
  return axios.post(
    `${API_URL}/api/Authentication/Login`,
    { loginIdentifier, password },  // Request body
    {
      headers: {
        'Content-Type': 'application/json',  // Explicitly specifying the content type
      }
    }
  )
  .then(response => {
    const { jwt, refresh } = response.data;
    // Store tokens in localStorage
    localStorage.setItem('accessToken', jwt);
    localStorage.setItem('refreshToken', refresh);
  })
  .catch(error => {
    // Handle errors based on status code
    if (error.response?.status === 400) {
      // Show toast notification for wrong credentials
      toast.error('Invalid credentials! Please try again.', {
        position: 'bottom-right',  // Change to bottom-right
        autoClose: 3000,  // Close after 3 seconds
        hideProgressBar: true,
      });
      throw new Error("Invalid credentials! Please try again.");
    } else {
      // Show toast notification for other types of errors
      toast.error(`Login Failed: ${error.response?.data || error.message}`, {
        position: 'bottom-right',  // Change to bottom-right
        autoClose: 3000,  // Close after 3 seconds
        hideProgressBar: true,
      });
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  });
};


export const logout = () => {
  return axios.patch (
    `${API_URL}/api/Authentication/Logout`,
    `"${localStorage.getItem("refreshToken")}"`,
    {
      headers: {
        "Content-Type": "application/json", // Matches the CURL header
        Accept: "*/*", // Matches the CURL header
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`, // Use your actual token here
      }
    }
  )
  .then(response => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    return response
  })
  .catch(error => {
      toast.error(`${error.response?.data || error.message || "Can not logout"}`, {
          position: 'bottom-right',
          autoClose: 3000,  // Close after 3 seconds
          hideProgressBar: true,
      });
      throw error;
    })
}


// Register user
export const register = (name, email, password) => {
  return axios.post(
    `${API_URL}/api/Authentication/Registration`,
    { name, email, password },  // Request body
    {
      headers: {
        'Content-Type': 'application/json',  // Explicitly specifying the content type
      }
    }
  )
  .then(response => {
    const { accessToken, refreshToken } = response.data;
    getUserRoles().then(rolesResponse => {
      const role = rolesResponse.data.roles[0];
      localStorage.setItem('userRole', role);
    })
    // Store tokens in localStorage
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  })
  .catch(error => {
    // Show toast notification for errors
    toast.error(error.response?.data[0]?.description || 'Registration failed', {
      position: 'bottom-right',  // Change to bottom-right
      autoClose: 3000,  // Close after 3 seconds
      hideProgressBar: true,
    });
    throw new Error(error.response?.data?.message || 'Registration failed');
  });
};

// Helper function to get the access token
export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

// Function to refresh the access token using the refresh token
export const refreshAccessToken = () => {
  const refreshToken = localStorage.getItem('refreshToken');

  return axios.put(`${API_URL}/api/Authentication/UpdateToken`, refreshToken, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(response => {
    const { jwt, refresh } = response.data;
    localStorage.setItem('accessToken', jwt);
    localStorage.setItem('refreshToken', refresh);
    return jwt;
  })
  .catch(error => {
    console.error('Failed to refresh token:', error);
    throw error;
  });
};
