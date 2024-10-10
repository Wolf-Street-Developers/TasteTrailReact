import "./VenueItem.css"

const VenueItem = ({item}) => {
    return (
        <div className="venue-item-container">
            <img className="logo" src={item.logoUrlPath}></img>
            <span className="venue-name">{item.name}</span>
        </div>
    );
  };
  
  
export default VenueItem
  