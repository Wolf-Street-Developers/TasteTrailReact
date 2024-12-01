import "./UpdateVenue.css";
import VenueForm from "../components/VenueForm/VenueForm";
import { createVenue, updateVenue } from "../api/ownerService";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVenueById } from "../api/menuService";

const UpdateVenue = () => {
  const {venueId} = useParams()
  const navigate = useNavigate()
  const [venue, setVenue] = useState(null)
  useEffect(()=>{
    getVenueById(venueId).then((res)=>{setVenue(res.data)})
  },[venueId])

  const editVenue = (venue) => {
    updateVenue(venue).then((res) => console.log(res));
  };

  return (
  <VenueForm
    onSubmit={(updatedVenue) => {editVenue(updatedVenue); navigate("/myVenue")}}
    initialData={venue}
  />
)
  
};

export default UpdateVenue;
