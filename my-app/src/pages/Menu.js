import { useEffect, useState } from "react";
import { getVenues } from "../api/menuService";
import VenueItem from "../components/VenueItem/VenueItem";


const Menu = () => {
  const [venues, setVenues] = useState([])
  useEffect(()=>{getVenues(1,1,10).then((res)=>{setVenues(res.data.entities)})},[])
  return (
    <div>
      {venues.map((item)=><VenueItem item={item} key={item.id}/>)}
    </div>
    );
  };
  
  
export default Menu
  