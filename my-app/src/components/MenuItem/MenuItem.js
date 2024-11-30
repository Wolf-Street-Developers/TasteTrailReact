import React, { useState } from "react";
import "./MenuItem.css";
import Modal from "../Modal/Modal";
import MenuItemForm from "../MenuItemForm/MenuItemForm";
import Button from "../Buttton/Button";
import { setMenuItemImage, updateMenuItem } from "../../api/ownerService";
import { deleteLike, postLike } from "../../api/menuService";

const MenuItem = ({ item, isOwner=false }) => {
  const [isLiked, setIsLiked] = useState(item.isLiked);
  const [likes, setLikes] = useState(item.likes);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [curMenuItem, setCurMenuItem] = useState(item)

  const handleLike = () => {
    if(!isLiked) {
      postLike({menuItemId: item.id}).then(()=>{setIsLiked(true);})
    } else {
      deleteLike({menuItemId: item.id}).then(()=>{setIsLiked(false);})
    }
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const editMenuItem = (updatedMenuItem) => {
    setCurMenuItem(updatedMenuItem)
    updateMenuItem(updatedMenuItem)
  }
  
  const handleEdit = () => {
    setIsModalOpen(true)
  }

  
  const handleFile = (event) => {
    setCurMenuItem({...curMenuItem, imageUrlPath:  URL.createObjectURL(event.target.files[0])});
    setMenuItemImage(event.target.files[0], item.id)
  };

  return (
    <>
      <div className="menu-item">
        <img src={curMenuItem.imageUrlPath ? curMenuItem.imageUrlPath : "https://tastetrailblobstorage.blob.core.windows.net/menuitem-images/default-image.png"}  alt={curMenuItem.name} className="menu-item-image" />
        <div className="menu-item-details">
          <div className="menu-item-info">
            <h2 className="menu-item-name">{curMenuItem.name}</h2>
            <p className="menu-item-description">{curMenuItem.description}</p>
            <p className="menu-item-price">${Number(curMenuItem.price).toFixed(2)}</p>
            <div className="menu-item-actions">
              <button className={`like-button ${isLiked ? "liked" : ""}`} onClick={handleLike}>
                {isLiked ? "❤️" : "🤍"} {likes}
              </button>
            </div>
          </div>
          {isOwner && <div className="menu-item-btns">
            <Button onClick={handleEdit}>Edit</Button> 
            <label onChange={handleFile} htmlFor="formId">
              <input name="" type="file" id="formId" hidden accept="image/*" /> 
                <div className="menu-item-edit-image-btn"> 
                  Edit Image 
                </div> 
            </label></div>}
        </div>
      </div>
      {isModalOpen && <Modal onClose={()=>setIsModalOpen(false)}><MenuItemForm onSubmit={editMenuItem} initialData={curMenuItem}/></Modal>}
    </>
  );
};

export default MenuItem;
