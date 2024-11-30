import "./CreateVenue.css";
import VenueForm from "../components/VenueForm/VenueForm";
import { createVenue } from "../api/ownerService";

const UpdateVenue = () => {
  const editVenue = (venue) => {
    UpdateVenue(venue).then((res) => (venue.id = res.data));
  };
  return <VenueForm onSubmit={editVenue} />;
};

export default UpdateVenue;
