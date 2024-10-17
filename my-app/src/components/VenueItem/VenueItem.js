import { useNavigate } from "react-router-dom";
import "./VenueItem.css"

const VenueItem = ({item}) => {
    const navigate = useNavigate()
    return (
        <div className="venue-item-container" onClick={()=>navigate(`/venue/${item.id}`, {state: { test: 'test'}})}>
            <img alt="Logo" className="venue-item-logo" src={item.logoUrlPath}></img>
            <span className="venue-item-name">{item.name}</span>
        </div>
    );
  };
  
  
export default VenueItem
  