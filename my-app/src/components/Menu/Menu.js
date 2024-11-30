import { useNavigate, useParams } from "react-router-dom"
import "./Menu.css"
import Button from "../Buttton/Button"
import { useState } from "react"
import MenuForm from "../MenuForm/MenuForm"
import Modal from "../Modal/Modal"
import { setMenuImage, updateMenu } from "../../api/ownerService"

const Menu = ({menu, isOwner=false}) => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [curMenu, setCurMenu] = useState(menu)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const editMenu = (updatedMenu) => {
        setCurMenu(updatedMenu)
        updateMenu(updatedMenu)
    }
    const handleEdit = (e) => {
        e.stopPropagation();
        setIsModalOpen(true)
    }

    const handleFile = (event) => {
        console.log(id)
        setCurMenu({...curMenu, imageUrlPath:  URL.createObjectURL(event.target.files[0])});
        setMenuImage(event.target.files[0], id)
    }
    return(
        <>
            <div className="menu-display" onClick={()=>{navigate(`/${isOwner ? "myVenue" : `venue/${id}`}/${menu.id}`)}}>
                <img src={curMenu.imageUrlPath?curMenu.imageUrlPath:"https://tastetrailblobstorage.blob.core.windows.net/menu-images/default-image.png"} alt={`${curMenu.name} logo`} className="menu-image" />
                <div className="menu-details">
                    <h2 className="menu-name">{curMenu.name}</h2>
                    <p className="menu-description">{curMenu.description}</p>
                </div>
                {isOwner && <div>
                <Button className="menu-edit-button" onClick={handleEdit}>Edit</Button>
                <label onChange={handleFile} htmlFor="formId">
                <input name="" type="file" id="formId" hidden accept="image/*" /> 
                <div className="edit-image-btn"> 
                Edit Image 
                </div> 
                </label></div>}
            </div>
            {isModalOpen && 
                <Modal onClose={()=>setIsModalOpen(false)}>
                    <MenuForm onSubmit={editMenu} initialData={curMenu}/>
                </Modal>
            }
        </>
    )
}

export default Menu