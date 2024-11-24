import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMenueById, getMenueItemsById } from "../api/menuService";
import Menu from "../components/Menu/Menu";
import Button from "../components/Buttton/Button";
import MenuItemForm from "../components/MenuItemForm/MenuItemForm";
import Modal from "../components/Modal/Modal";
import { createMenuItem, updateMenuItem } from "../api/ownerService";
import MenuItem from "../components/MenuItem/MenuItem";

const MenuPage = () => {
  const {venueId, menuId} = useParams();
  const [menu, setMenu] = useState()
  const [menuItems, setMenuItems] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addMenuItem = (menuItem) => {
    setMenuItems([...menuItems, menuItem])
    closeModal();
    createMenuItem({name:menuItem.name, description: menuItem.description, price: menuItem.price,menuId: menu.id});
  }

  useEffect(()=>{
    getMenueById(menuId).then((u)=>{setMenu(u.data);})
    getMenueItemsById(menuId).then((u)=>{setMenuItems(u.data.entities);})
  },[])
  return (
    <div>
      {menu && <Menu menu={menu} isOwner/>}
      {menuItems.map((item)=>
        <MenuItem item={item} isOwner/>
      )}
      <Button onClick={openModal}>Add item</Button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <MenuItemForm
            onSubmit={addMenuItem}
          />
        </Modal>
      )}
    </div>
    );
  };
  
  
export default MenuPage