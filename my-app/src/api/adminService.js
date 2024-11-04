import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = "http://135.236.238.56:5000";


export const getUsersCount = ( type=9 ) => {
    return axios.post(
      `${API_URL}/api/AdminDashboard/User/Count`,
      { type },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
    .then(response => {
      return response
    })
    .catch(error => {
        toast.error(`${error.response?.data || error.message || "Can not get user count"}`, {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: true,
        })
        console.log(error)
        throw new Error(error.response?.data?.message || "Can not get user count");
      })
}

export const getUsers = (type, pageNumber, pageSize, searchterm="") => {
    return axios.post(
        `${API_URL}/api/AdminDashboard/UserFilter`, 
        { type, pageNumber, pageSize, searchterm },
    )
    .then(response => {
      return response
    })
    .catch(error => {
        toast.error(`${error.response?.data || error.message || "Can not get users"}`, {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: true,
        })
        console.log(error)
        throw new Error(error.response?.data?.message || "Can not get users");
      })
}


export const toggleBan = (userId) => {
  return axios.post(
      `${API_URL}/api/AdminDashboard/ToggleBan?userId=${userId}`, 
  )
  .then(response => {
    return response
  })
  .catch(error => {
      toast.error(`${error.response?.data || error.message || "Can not ban user"}`, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: true,
      })
      console.log(error)
      throw new Error(error.response?.data?.message || "Can not ban user");
    })
}




export const toggleMute = (userId) => {
  return axios.post(
      `${API_URL}/api/AdminDashboard/ToggleMute?userId=${userId}`, 
  )
  .then(response => {
    return response
  })
  .catch(error => {
      toast.error(`${error.response?.data || error.message || "Can not mute user"}`, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: true,
      })
      console.log(error)
      throw new Error(error.response?.data?.message || "Can not mute user");
    })
}

export const setRole = (userId, role) => {
  return axios.post(
      `${API_URL}/api/AdminDashboard/AssignRole`,
      {userId, role},
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
  )
  .then(response => {
    return response
  })
  .catch(error => {
      toast.error(`${error.response?.data || error.message || "Can not set role"}`, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: true,
      })
      console.log({userId, role})
      throw new Error(error.response?.data?.message || "Can not set role");
    })
}
