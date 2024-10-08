// src/api/authService.js
import axios from 'axios';

const API_URL = "http://20.123.63.95:5000";  // Your API base URL

// Login user
export const login = async (loginIdentifier, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/Authentication/Login`, { loginIdentifier, password }, {
        headers: {
          'Content-Type': 'application/json',  // Explicitly specifying the content type
        }
      });
    return response.data;  // Return the response data
  } catch (error) {
    if (error.response.data === "Invalid credentials!") {
        return error.response.data
    }
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

// Register user
export const register = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/Authentication/Register`, { name, email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

