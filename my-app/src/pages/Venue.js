import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getVenueById } from "../api/menuService";
import "./Venue.css"
import Map from "../components/Map/Map";
import { getMyVenues } from "../api/ownerService";
import TabComponent from "../components/TabComponent/TabComponent";
import { useRole } from "../RoleContext";
import LocationIcon from '../assets/icons/location.png';
import EmailIcon from '../assets/icons/email.png';
import PhoneIcon from '../assets/icons/telephone.png';
import { StarRating } from '../components/StarRating/StarRating'


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
      <div className="venue-head-info">
        <div className="venue-name">{venue.name}</div>
        <div className="venue-secondary-head-info">
          <div className="venue-info-address"> {venue.address}</div>
          <div className="venue-secondary-head-phone">
          <img style={{width: 24,height: 24}} src={PhoneIcon} alt="phone"/>
          <div className="venue-info-address"> {venue.contactNumber}</div>
          </div>
          <div className="venue-rating-container"><StarRating rating={venue.rating}/></div>
        </div>
      </div>
      <div className="venue-container">
        <div className="venue-img-wrapper">
            <img className="venue-img" alt="logo" src={venue.logoUrlPath + `?v=${Math.random()}`}/>
        </div>

        <div className="venue-info-wrapper">
          <div className="venue-info-text">
            <div className="first-info-wrapper">
              <div className="venue-about-container">
                <div className="venue-main-header">About</div>
                <div className="venue-text-container venue-flex-container">
                  <div className="venue-description">{venue.description}</div>
                </div>
              </div>

              <div className="venue-average-price">
                <div className="venue-average-header">On Average</div>
                <div className="venue-average-dollar">{venue.averagePrice}$</div>
              </div>
            </div>
              
            <div className="venue-main-header">Location</div>
            <div className="venue-text-container">
              <div className="venue-location-container">
                <Map position={position} venueName={venue.name}/>
                <div className="venue-location-info">
                  <img style={{width: 24,height: 24}} src={LocationIcon} alt="location"/>
                  <div className="venue-info-address">{venue.address}</div>
                </div>
              </div>
            </div>

            <div className="venue-main-header">Contacts</div>
            <div className="venue-text-container">
              <div className="venue-contact-number">
                <img style={{width: 24,height: 24}} src={PhoneIcon}  alt="phone"/>
                {venue.contactNumber}
              </div>
              <div className="venue-contact-email">
                <img style={{width: 24,height: 24}} src={EmailIcon} alt="email"/>
                {venue.email}
              </div>
            </div>
          </div>


        </div>

        <TabComponent isOwner={isOwner} venueId={id}/>
      </div>
    </div>
  );
};

export default Venue;