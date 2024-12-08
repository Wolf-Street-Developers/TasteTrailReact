import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = "http://135.236.96.117:9001";


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

export const getFeedbacksByVenue = (id, type=0, pageNumber=1, pageSize=10, searchterm="") => {
  return axios.post(
      `${API_URL}/api/Feedback/GetFilteredByVenue?venueId=${id}`, 
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
    toast.error(`${error.response?.data || error.message || "Can not get feedbacks"}`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
    })
    console.log(error)
    throw new Error(error.response?.data?.message || "Can not get feedbacks");
  })
}


export const postFeedback = ({text, rating, venueId}) => {
  console.log({text, rating, venueId})
  return axios.post(
      `${API_URL}/api/Feedback/Create`, 
      {text, rating, venueId},
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
    toast.error(`${error.response?.data || error.message || "Can not post feedback"}`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
    })
    console.log(error)
    throw new Error(error.response?.data?.message || "Can not post feedback");
  })
}


export const postLike = ({menuItemId}) => {
  return axios.post(
      `${API_URL}/api/MenuItemLike`, 
      {menuItemId},
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
    toast.error(`${error.response?.data || error.message || "Can not like menu item"}`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
    })
    console.log(error)
    throw new Error(error.response?.data?.message || "Can not like menu item");
  })
}


export const deleteLike = ({menuItemId}) => {
  return axios.delete(
      `${API_URL}/api/MenuItemLike?menuItemId=${menuItemId}`,
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
    toast.error(`${error.response?.data || error.message || "Can not like menu item"}`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
    })
    console.log(error)
    throw new Error(error.response?.data?.message || "Can not like menu item");
  })
}


export const postFeedbackLike = ({feedbackId}) => {
  console.log({feedbackId})
  return axios.post(
      `${API_URL}/api/FeedbackLike`, 
      {feedbackId},
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
    toast.error(`${error.response?.data || error.message || "Can not like feedback"}`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
    })
    console.log(error)
    throw new Error(error.response?.data?.message || "Can not like feedback");
  })
}



export const deleteFeedbackLike = ({feedbackId}) => {
  return axios.delete(
      `${API_URL}/api/FeedbackLike?feedbackId=${feedbackId}`,
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
    toast.error(`${error.response?.data || error.message || "Can not like feedback"}`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
    })
    console.log(error)
    throw new Error(error.response?.data?.message || "Can not like feedback");
  })
}