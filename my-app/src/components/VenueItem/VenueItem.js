import { useNavigate } from "react-router-dom";
import "./VenueItem.css"

const VenueItem = ({item}) => {
    console.log(Object.keys(item))
    const navigate = useNavigate()
    const {id,name,address,description,logoUrlPath,averagePrice,rating} = item
    return (
        <div className="venue-item-container" onClick={()=>navigate(`/venue/${id}`)}>
            <img alt="Logo" className="venue-item-logo" src={logoUrlPath}></img>
            <div className="venue-item-info">
                <p className="venue-item-name">{name}</p>
                <p className="venue-item-description">{description}</p>
                <div className="venue-item-info-misc">
                    <p className="venue-item-address">Address: {address}</p>
                    <div className="venue-item-info-misc-misc">
                        <p className="venue-item-averagePrice">~{averagePrice}$</p>
                        <p className="venue-item-rating">{rating}/5</p>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  
export default VenueItem
  