import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMenueById, getMenueItemsById } from "../api/menuService";
import Menu from "../components/Menu/Menu";
import Button from "../components/Buttton/Button";
import MenuItemForm from "../components/MenuItemForm/MenuItemForm";
import Modal from "../components/Modal/Modal";
import { createMenuItem, updateMenuItem } from "../api/ownerService";
import MenuItem from "../components/MenuItem/MenuItem";

const MyMenuPage = () => {
  const {id} = useParams();
  const [menu, setMenu] = useState()
  const [menuItems, setMenuItems] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMenuItem, setEditingMenuItem] = useState(null)

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const editMenuItem = (id, updatedMenuItem) => {
    const updatedMenueItems = menuItems.map((menuItem) =>
      menuItem.id === id ? updatedMenuItem : menuItem
    );
    setMenuItems(updatedMenueItems);
    closeModal();
    updateMenuItem(updatedMenuItem);
  }

  const addMenuItem = (menuItem) => {
    setMenuItems([...menuItems, menuItem])
    closeModal();
    createMenuItem({name:menuItem.name, description: menuItem.description, price: menuItem.price,menuId: menu.id});
  }

  useEffect(()=>{
    getMenueById(id).then((u)=>{setMenu(u.data);})
    getMenueItemsById(id).then((u)=>{setMenuItems(u.data.entities);})
  },[])
  return (
    <div>
      {menu && <Menu menu={menu}/>}
      {menuItems.map((item)=>
        <MenuItem item={item}/>
      )}
      <Button onClick={openModal}>Add item</Button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <MenuItemForm
            onSubmit={editingMenuItem ? (updatedMenuItem) => editMenuItem(editingMenuItem.id, updatedMenuItem) : addMenuItem}
            initialData={editingMenuItem}
          />
        </Modal>
      )}
    </div>
    );
  };
  
  
export default MyMenuPage