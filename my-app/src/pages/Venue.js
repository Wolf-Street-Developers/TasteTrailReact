import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMenuesById, getVenueById } from "../api/menuService";
import "./Venue.css"
import Map from "../components/Map/Map";

const Venue = () => {
  const {id} = useParams();

  const [venue, setVenue] = useState({})
  const [menues, setMenues] = useState([])
  const [position, setPosition] = useState([51.505, -0.09])

  
  useEffect(()=>{
    getVenueById(id).then((res)=>{
      setVenue(res.data);
      setPosition([res.data.longtitude, res.data.latitude]);
    })
    getMenuesById(id).then((res)=>{console.log(res.data)})
  },[id])


  return (
    <div className="venue-container">
      <h1 className="venue-name">{venue.name}</h1>
      <div className="venue-info-wrapper">
        <div className="venue-info-text">
          <p className="venue-info-address"><strong>Address:</strong> {venue.address}</p>
          <p className="venue-info-average-price"><strong>Average Price:</strong> ${venue.averagePrice}</p>
          <p className="venue-info-contact-number"><strong>Contact Number:</strong> {venue.contactNumber}</p>
          <p className="venue-info-creation-date"><strong>Creation Date:</strong> {new Date(venue.creationDate).toLocaleDateString()}</p>
          <p className="venue-info-description"><strong>Description:</strong> {venue.description}</p>
          <p className="venue-info-email"><strong>Email:</strong> {venue.email}</p>
          <p className="venue-info-rating"><strong>Rating:</strong> {venue.rating}</p>
        </div>

        <div className="venue-info-img-wrapper">
          <img className="venue-info-img" alt="logo" src={venue.logoUrlPath}/>
        </div>
      </div>
      <Map position={position} venueName={venue.name}/>

      <div className="venue-menues">
        {menues.map((item)=>item.id)}
      </div>
    </div>
  );
};

export default Venue;