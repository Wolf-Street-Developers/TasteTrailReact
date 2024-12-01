// src/api/authService.js
import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = "http://135.236.96.117:5000";

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
      console.log(error)
  })
}


export const setAvatar = ( image ) => {
  const formData = new FormData();
  formData.append('avatar', image);
  return axios.patch(
    `${API_URL}/api/User/Avatar`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }
  )
  .then(response => {
    console.log(response)
    return response;
  })
  .catch(error => {
    toast.error(`${error.response?.data || error.message || "Can not set user image"}`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
    });
    console.error(error);
    throw new Error(error.response?.data?.message || "Can not set user image");
  });
};

