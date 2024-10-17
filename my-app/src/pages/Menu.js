import { useEffect, useState } from "react";
import { getVenues } from "../api/menuService";
import VenueItem from "../components/VenueItem/VenueItem";
import Search from "../components/Search/Search";


const Menu = () => {
  const [venues, setVenues] = useState([])
  const [filter, setFilter] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  useEffect(()=>{getVenues(1,1,10).then((res)=>{setVenues(res.data.entities)})},[])

  const handleSearch = () => {
    getVenues(1,1,10, searchTerm).then((res)=>{setVenues(res.data.entities)})
  }

  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} filter={filter} setFilter={setFilter} handleSearch={handleSearch}/>
      {venues.map((item)=><VenueItem item={item} key={item.id}/>)}
    </div>
    );
  };
  
  
export default Menu