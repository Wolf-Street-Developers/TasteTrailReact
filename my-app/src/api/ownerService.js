import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = "http://135.236.96.117:8000";


export const getMyVenues = () => {
    return axios.get(
      `${API_URL}/api/Venue/GetByUserId`,
    )
    .then(response => {
      return response
    })
    .catch(error => {
        toast.error(`${error.response?.data || error.message || "Can not get user venues"}`, {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: true,
        })
        console.log(error)
        throw new Error(error.response?.data?.message || "Can not get user venues");
      })
}


export const createVenue = ({name, address, description, email, contactNumber, averagePrice, longtitude, latitude}) => {
  return axios.post(
    `${API_URL}/api/Venue/Create`,
    { name, address, description, email, contactNumber, averagePrice, longtitude, latitude },
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
      toast.error(`${error.response?.data || error.message || "Can not create venue"}`, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: true,
      })
      console.log(error)
      throw new Error(error.response?.data?.message || "Can not create venue");
    })
}

export const updateVenue = ({ id, name, address, description, email, contactNumber, averagePrice, longtitude, latitude, logoUrlPath }) => {
  console.log({ id, name, address, description, email, contactNumber, averagePrice, longtitude, latitude, logoUrlPath })
  return axios.put(
    `${API_URL}/api/Venue/Update`,
    { id, name, address, description, email, contactNumber, averagePrice, longtitude, latitude, logoUrlPath },
    {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  )
  .then(response => {
    return response;
  })
  .catch(error => {
    toast.error(`${error.response?.data || error.message || "Can not update venue"}`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
    });
    console.error(error);
    throw new Error(error.response?.data?.message || "Can not update venue");
  });
};

export const setImage = ( image, venueId ) => {
  const formData = new FormData();
  formData.append('image', image);
  return axios.post(
    `${API_URL}/api/Venue/SetImage?venueId=${venueId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }
  )
  .then(response => {
    return response;
  })
  .catch(error => {
    toast.error(`${error.response?.data || error.message || "Can not set image"}`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
    });
    console.error(error);
    throw new Error(error.response?.data?.message || "Can not set image");
  });
};

export const createMenu = ( {name, description, venueId} ) => {
  return axios.post(
    `${API_URL}/api/Menu/Create`, 
    {name, description, venueId}, {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  )
  .then(response => {
    return response;
  })
  .catch(error => {
    toast.error(`${error.response?.data || error.message || "Can not create menu"}`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
    });
    console.error(error);
    throw new Error(error.response?.data?.message || "Can not create menu");
  });
};

export const updateMenu = ({ id, name, description }) => {
  return axios.put(
    `${API_URL}/api/Menu/Update`,
    { id, name, description },
    {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  )
  .then(response => {
    return response;
  })
  .catch(error => {
    toast.error(`${error.response?.data || error.message || "Can not update menu"}`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
    });
    console.error(error);
    throw new Error(error.response?.data?.message || "Can not update menu");
  });
};


export const createMenuItem = ({name, description, price, menuId}) => {
  return axios.post(
    `${API_URL}/api/MenuItem/Create`, 
    {name, description, price, menuId}, 
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


export const updateMenuItem = ({ id, name, description, price }) => {
  return axios.put(
    `${API_URL}/api/MenuItem/Update`,
    { id, name, description, price },
    {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  )
  .then(response => {
    return response;
  })
  .catch(error => {
    toast.error(`${error.response?.data || error.message || "Can not update menu"}`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
    });
    console.error(error);
    throw new Error(error.response?.data?.message || "Can not update menu");
  });
};

export const setMenuItemImage = ( image, menuItemId ) => {
  const formData = new FormData();
  formData.append('image', image);
  return axios.post(
    `${API_URL}/api/MenuItem/SetImage?menuItemId=${menuItemId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }
  )
  .then(response => {
    return response;
  })
  .catch(error => {
    toast.error(`${error.response?.data || error.message || "Can not set menu item image"}`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
    });
    console.error(error);
    throw new Error(error.response?.data?.message || "Can not set menu item image");
  });
};


export const setMenuImage = ( image, menuId ) => {
  const formData = new FormData();
  formData.append('image', image);
  return axios.post(
    `${API_URL}/api/Menu/SetImage?menuId=${menuId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }
  )
  .then(response => {
    return response;
  })
  .catch(error => {
    toast.error(`${error.response?.data || error.message || "Can not set menu image"}`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
    });
    console.error(error);
    throw new Error(error.response?.data?.message || "Can not set menu image");
  });
};
