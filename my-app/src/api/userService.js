// src/api/authService.js
import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = "http://20.123.63.95:5000";

export const getUserRoles = () => {
  return axios.get (
    `${API_URL}/api/User/GetUserRoles`,
  )
  .then(response => {
    return response
  })
  .catch(error => {
      toast.error(`${error.response?.data || error.message || "Can not get user roles"}`, {
          position: 'bottom-right',
          autoClose: 3000,  // Close after 3 seconds
          hideProgressBar: true,
      });
      throw error;
    })
}