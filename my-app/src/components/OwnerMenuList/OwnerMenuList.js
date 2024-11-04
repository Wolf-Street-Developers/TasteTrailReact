import { useEffect, useState } from "react";
import { getMenuesById } from "../../api/menuService";
import "./OwnerMenuList.css"
import Modal from "../Modal/Modal";
import MenuForm from "../MenuForm/MenuForm";
import { createMenu, updateMenu } from "../../api/ownerService";
import Menu from "../Menu/Menu";
const OwnerMenuList = (props) => {
  const {venue} = props
  const [menues, setMenues] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMenu, setEditingMenu] = useState(null)


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const editMenu = (id, updatedMenu) => {
    const updatedMenues = menues.map((menu) =>
      menu.id === id ? updatedMenu : menu
    );
    setMenues(updatedMenues);
    closeModal();
    updateMenu(updatedMenu);
  }

  const addMenu = (menu) => {
    setMenues([...menues, menu])
    closeModal();
    createMenu({name:menu.name, description: menu.description, venueId: venue.id});
  }

  useEffect(() => {
    if(venue){
      getMenuesById(venue.id).then((u) => {
        setMenues(u.data.entities);
      });
    }
  }, [venue]);


    return (
        <div>
            <h1 className="owner-menu-list-title">Menu</h1>
            {props.children}
            {menues.map((val)=><Menu menu={val} key={val.id}/>)}
            <button className="owner-add-menu-btn" onClick={openModal}>Add menu</button>
            {isModalOpen && (
              <Modal onClose={closeModal}>
                <MenuForm
                  onSubmit={editingMenu ? (updatedMenu) => editMenu(editingMenu.id, updatedMenu) : addMenu}
                  initialData={editingMenu}
                />
              </Modal>
            )}
        </div>
      );
    };
    
    
  export default OwnerMenuList