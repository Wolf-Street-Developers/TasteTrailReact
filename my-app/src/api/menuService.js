import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = "http://40.67.193.169:7000";


export const getVenues = (type, pageNumber, pageSize, searchterm="") => {
  return axios.post(
    `${API_URL}/api/Venue/GetFiltered`,
    { type, pageNumber, pageSize, searchterm },
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
      toast.error(`${error.response?.data || error.message || "Can not get venues"}`, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: true,
      })
      console.log(error)
      throw new Error(error.response?.data?.message || "Can not get venues");
    })
}

export const getVenueById = (id) => {
  return axios.get(
    `${API_URL}/api/Venue/GetById/${id}`,
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
      toast.error(`${error.response?.data || error.message || "Can not get venues"}`, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: true,
      })
      console.log(error)
      throw new Error(error.response?.data?.message || "Can not get venues");
    })
}


export const getVenueCount = () => {
  return axios.get(
    `${API_URL}/api/Venue/GetCount`
  )
  .then(response => {
    return response
  })
  .catch(error => {
      toast.error(`${error.response?.data || error.message || "Can not get venue count"}`, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: true,
      })
      console.log(error)
      throw new Error(error.response?.data?.message || "Can not get venue count");
    })
}


export const getMenuesById = (venueId, pageNumber=1, pageSize=10) => {
  return axios.post(
    `${API_URL}/api/Menu/GetFilteredByVenue?venueId=${venueId}`,
    { pageNumber, pageSize }
  )
  .then(response => {
    return response
  })
  .catch(error => {
      toast.error(`${error.response?.data || error.message || "Can not get menues"}`, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: true,
      })
      console.log(error)
      throw new Error(error.response?.data?.message || "Can not get menues");
    })
}

export const getMenueById = (id) => {
  return axios.get(
      `${API_URL}/api/Menu/GetById/${id}`,
  )
  .then(response => {
    return response
  })
  .catch(error => {
    toast.error(`${error.response?.data || error.message || "Can not get menu"}`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
    })
    console.log(error)
    throw new Error(error.response?.data?.message || "Can not get menu");
  })
}

export const getMenueItemsById = (id, type=0, pageNumber=1, pageSize=10, searchterm="") => {
  return axios.post(
      `${API_URL}/api/MenuItem/GetFilteredByMenu?menuId=${id}`, 
      {type, pageNumber, pageSize, searchterm}, 
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
    toast.error(`${error.response?.data || error.message || "Can not get menu items"}`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
    })
    console.log(error)
    throw new Error(error.response?.data?.message || "Can not get menu items");
  })
}
