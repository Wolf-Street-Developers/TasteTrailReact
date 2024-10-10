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
            autoClose: 3000,  // Close after 3 seconds
            hideProgressBar: true,
        })
        console.log(error)
        throw new Error(error.response?.data?.message || "Can not get venues");
      })
  }