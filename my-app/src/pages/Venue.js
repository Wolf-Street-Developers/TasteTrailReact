import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getVenueById } from "../api/menuService";
import "./Venue.css"
import Map from "../components/Map/Map";
import { getMyVenues } from "../api/ownerService";
import TabComponent from "../components/TabComponent/TabComponent";
import { useRole } from "../RoleContext";

const Venue = () => {
  const {id} = useParams();
  const {role} = useRole()

  const [isOwner, setIsOwner] = useState(false)
  const [venue, setVenue] = useState({})
  const [position, setPosition] = useState([51.505, -0.09])

  
  useEffect(()=>{
    if(role === "Owner") {
      getMyVenues().then((u)=>{
        u.data.forEach((val)=>{
          if(Number(val.id) === Number(id)
          ) {
            setIsOwner(true);
          }
        })
      })
    } else {
      setIsOwner(false)
    }
    getVenueById(id).then((res)=>{
      setVenue(res.data);
      setPosition([res.data.latitude, res.data.longtitude]);
    })
  },[id, role])

  return (
    <div className="main-container">
      <h1 className="venue-name">{venue.name}</h1>
      <div className="venue-container">
        <div className="venue-rating-container"><strong>Rating:</strong> {venue.rating}</div>

        <div className="venue-img-wrapper">
            <img className="venue-img" alt="logo" src={venue.logoUrlPath}/>
        </div>

        <div className="venue-info-wrapper">
          <div className="venue-info-text">

            <div className="venue-main-header">About</div>
            <div className="venue-text-container">
              <div className="venue-description">{venue.description}</div>
              <div className="venue-average-price">
                <span className="average-price-header">Avg. price: </span> 
                {venue.averagePrice}
                <span style={{ color: "green"}} className="dollar-sign">$</span>
              </div>
            </div>
              
            <div className="venue-main-header">Location</div>
            <div className="venue-text-container">
              <div className="venue-location-container">
                <Map position={position} venueName={venue.name}/>
                <div className="venue-info-address"> {venue.address}</div>
              </div>
            </div>

            <div className="venue-main-header">Contacts</div>
            <div className="venue-text-container">
              <div className="venue-contact-number">{venue.contactNumber}</div>
              <div className="venue-contact-email">{venue.email}</div>
            </div>
          </div>


        </div>

        <TabComponent isOwner={isOwner} venueId={id}/>
      </div>
    </div>
  );
};

export default Venue;