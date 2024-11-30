import { useNavigate } from "react-router-dom";
import "./Menu.css";
import Button from "../Buttton/Button";
import { useState } from "react";
import MenuForm from "../MenuForm/MenuForm";
import Modal from "../Modal/Modal";
import { setMenuImage, updateMenu } from "../../api/ownerService";

const Menu = ({ menu, isOwner = false, venueId }) => {
  const navigate = useNavigate();
  const [curMenu, setCurMenu] = useState(menu);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const editMenu = (updatedMenu) => {
    setCurMenu(updatedMenu);
    updateMenu(updatedMenu);
  };
  const handleEdit = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleFile = (event) => {
    event.stopPropagation();
    setCurMenu({
      ...curMenu,
      imageUrlPath: URL.createObjectURL(event.target.files[0]),
    });
    setMenuImage(event.target.files[0], venueId);
  };
  return (
    <>
      <div
        className="menu-display"
        onClick={() => {
          console.log(venueId);
          navigate(
            `/${`venue/${venueId}`}/${
              menu.id
            }`
          );
        }}
      >
        <img
          src={
            curMenu.imageUrlPath
              ? curMenu.imageUrlPath
              : "https://tastetrailblobstorage.blob.core.windows.net/menu-images/default-image.png"
          }
          alt={`${curMenu.name} logo`}
          className="menu-image"
        />
        <div className="menu-info">
          <div className="menu-details">
            <h2 className="menu-name">{curMenu.name}</h2>
            <p className="menu-description">{curMenu.description}</p>
          </div>
          {isOwner && (
            <div className="menu-edit-btns">
              <Button className="menu-edit-button" onClick={handleEdit}>
                Edit
              </Button>
              <label onChange={handleFile} htmlFor="formId">
                <input
                  name=""
                  type="file"
                  id="formId"
                  hidden
                  accept="image/*"
                />
                <div className="edit-image-btn">Edit Image</div>
              </label>
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <MenuForm onSubmit={editMenu} initialData={curMenu} />
        </Modal>
      )}
    </>
  );
};

export default Menu;
