import "./CreateVenue.css";
import VenueForm from "../components/VenueForm/VenueForm";
import { createVenue } from "../api/ownerService";
import { useNavigate } from "react-router-dom";

const CreateVenue = () => {
  const navigate = useNavigate();
  const addVenue = (venue) => {
    createVenue(venue).then((res) => (venue.id = res.data));
    navigate("/myVenue")
  };
  return <VenueForm onSubmit={addVenue} />;
};

export default CreateVenue;
