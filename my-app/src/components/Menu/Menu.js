import { useNavigate } from "react-router-dom"
import "./Menu.css"

const Menu = ({menu}) => {
    const navigate = useNavigate()
    return(
        <div className="menu-display" onClick={()=>navigate(`/myVenue/${menu.id}`)}>
            <img src={menu.imageUrlPath?menu.imageUrlPath:"https://tastetrailblobstorage.blob.core.windows.net/menu-images/default-image.png"} alt={`${menu.name} logo`} className="menu-image" />
            <div className="menu-details">
                <h2 className="menu-name">{menu.name}</h2>
                <p className="menu-description">{menu.description}</p>
            </div>
        </div>
    )
}

export default Menu