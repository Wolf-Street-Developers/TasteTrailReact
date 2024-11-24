import React, { useState } from "react";
import "./MenuItem.css";
import Modal from "../Modal/Modal";
import MenuItemForm from "../MenuItemForm/MenuItemForm";
import Button from "../Buttton/Button";
import { updateMenuItem } from "../../api/ownerService";

const MenuItem = ({ item, isOwner=false }) => {
  const [isLiked, setIsLiked] = useState(item.isLiked);
  const [likes, setLikes] = useState(item.likes);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [curMenuItem, setCurMenuItem] = useState(item)

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const editMenuItem = (updatedMenuItem) => {
    setCurMenuItem(updatedMenuItem)
    updateMenuItem(updatedMenuItem)
  }
  
  const handleEdit = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="menu-item">
        <img src={curMenuItem.imageUrlPath ? curMenuItem.imageUrlPath : "https://tastetrailblobstorage.blob.core.windows.net/menuitem-images/default-image.png"}  alt={curMenuItem.name} className="menu-item-image" />
        <div className="menu-item-details">
          <h2 className="menu-item-name">{curMenuItem.name}</h2>
          <p className="menu-item-description">{curMenuItem.description}</p>
          <p className="menu-item-price">${Number(curMenuItem.price).toFixed(2)}</p>
          <div className="menu-item-actions">
            <button className={`like-button ${isLiked ? "liked" : ""}`} onClick={handleLike}>
              {isLiked ? "❤️" : "🤍"} {likes}
            </button>
          </div>
          {isOwner && <Button onClick={handleEdit}>Edit</Button>}
        </div>
      </div>
      {isModalOpen && <Modal onClose={()=>setIsModalOpen(false)}><MenuItemForm onSubmit={editMenuItem} initialData={curMenuItem}/></Modal>}
    </>
  );
};

export default MenuItem;
