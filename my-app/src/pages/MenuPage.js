import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMenueById, getMenueItemsById } from "../api/menuService";
import Menu from "../components/Menu/Menu";
import Button from "../components/Buttton/Button";
import MenuItemForm from "../components/MenuItemForm/MenuItemForm";
import Modal from "../components/Modal/Modal";
import { createMenuItem } from "../api/ownerService";
import MenuItem from "../components/MenuItem/MenuItem";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";

const MenuPage = () => {
  const {venueId, menuId} = useParams();
  const [menu, setMenu] = useState()
  const [menuItems, setMenuItems] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const [filter, setFilter] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")

  
  const [menuItemPage, setMenuItemPage] = useState(1)

  const menuItemPageSize = 1;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addMenuItem = (menuItem) => {
    setMenuItems([...menuItems, menuItem])
    closeModal();
    createMenuItem({name:menuItem.name, description: menuItem.description, price: menuItem.price,menuId: menu.id});
  }

  const handleSearch = () => {
    getMenueById(menuId).then((u)=>{setMenu(u.data);})
    console.log({menuId, filter, menuItemPage, menuItemPageSize, searchTerm})
    getMenueItemsById(menuId, 0, menuItemPage, menuItemPageSize, searchTerm).then((u)=>{setMenuItems(u.data.entities);})
  }

  useEffect(()=>{
    handleSearch();
  },[menuItemPage])
  return (
    <div>
      {menu && <Menu menu={menu} isOwner/>}
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} filter={filter} setFilter={setFilter} handleSearch={handleSearch}/>
      {menuItems.map((item)=>
        <MenuItem item={item} isOwner key={item.id}/>
      )}
      <Pagination type="MenuItems" setPage={setMenuItemPage} page={menuItemPage} id={menuId} count={menuItemPageSize}/>
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