import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFeedbacksByVenue, getMenuesById, getVenueById } from "../api/menuService";
import "./Venue.css"
import Map from "../components/Map/Map";
import Menu from "../components/Menu/Menu";
import { getMyVenues } from "../api/ownerService";
import FeedbackForm from "../components/FeedbackForm/FeedbackForm";
import FeedbackItem from "../components/FeedbackItem/FeedbackItem";
import Pagination from "../components/Pagination/Pagination";

const Venue = () => {
  const {id} = useParams();

  const [isOwner, setIsOwner] = useState(false)
  const [venue, setVenue] = useState({})
  const [menues, setMenues] = useState([])
  const [position, setPosition] = useState([51.505, -0.09])
  const [feedbacks, setFeedbacks] = useState([])
  const [menuPage, setMenuPage] = useState(1)
  const [feedbackPage, setFeedbackPage] = useState(1)

  const menuPageSize = 1;
  const feedbackPageSize = 1;
  
  useEffect(()=>{
    getMyVenues().then((u)=>{
      u.data.forEach((val)=>{
        if(Number(val.id) === Number(id)
        ){
          setIsOwner(true);
        }
      })
    })
    getVenueById(id).then((res)=>{
      setVenue(res.data);
      setPosition([res.data.latitude, res.data.longtitude]);
    })
    getMenuesById(id, menuPage, menuPageSize).then((res)=>{
      setMenues(res.data.entities)
    })
    getFeedbacksByVenue(id).then((res)=>{
      setFeedbacks(res.data.entities)
    })
  },[id, menuPage])

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
      <h1 className="venue-menu-title">Menu</h1>
      <div className="venue-menues">
        {menues.map((item)=><Menu menu={item} isOwner={isOwner} key={item.id}/>)}
        <Pagination type="Menues" setPage={setMenuPage} page={menuPage} id={id} count={menuPageSize}/>
      </div>
      <h1 className="venue-feedback-title">Feedbacks</h1>
      
      <div className="venue-feedbacks">
        {feedbacks.map((item)=><FeedbackItem feedback={item}/>)}
        <Pagination type="Feedbacks" setPage={setFeedbackPage} page={feedbackPage} id={id} count={feedbackPageSize}/>
      </div>
      <h2>Add feedback:</h2>
      <FeedbackForm venueId = {venue.id} updateFeedbacks={()=>{
    getFeedbacksByVenue(id).then((res)=>{
      setFeedbacks(res.data.entities)
    })}}/>

    </div>
  );
};

export default Venue;