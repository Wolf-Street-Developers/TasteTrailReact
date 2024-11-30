import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMenueById, getMenueItemsById } from "../api/menuService";
import Menu from "../components/Menu/Menu";
import Button from "../components/Buttton/Button";
import MenuItemForm from "../components/MenuItemForm/MenuItemForm";
import Modal from "../components/Modal/Modal";
import { createMenuItem } from "../api/ownerService";
import MenuItem from "../components/MenuItem/MenuItem";
import "./MyMenuPage.css"
import Pagination from "../components/Pagination/Pagination";

const MyMenuPage = () => {
  const {id} = useParams();
  const [menu, setMenu] = useState()
  const [menuItems, setMenuItems] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const [menuItemPage, setMenuItemPage] = useState(1)

  const menuItemPageSize = 1;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
      {menu && <Menu menu={menu} isOwner/>}
      {menuItems.map((item)=>
        <MenuItem item={item} isOwner/>
      )}
      <Pagination type="MenuItems" setPage={setMenuItemPage} page={menuItemPage} id={id} count={menuItemPageSize}/>

      <Button className="my-menu-page-add-item-btn" onClick={openModal}>Add item</Button>
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
  
  
export default MyMenuPage