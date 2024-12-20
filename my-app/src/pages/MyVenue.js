import React, { useEffect, useState } from "react";
import Modal from "../components/Modal/Modal";
import VenueForm from "../components/VenueForm/VenueForm";
import VenueTab from "../components/VenueTab/VenueTab";
import "./MyVenue.css";
import { createVenue, getMyVenues, setImage, updateVenue } from "../api/ownerService";
import MenuList from "../components/MenuList/MenuList";
import { useNavigate } from "react-router-dom";

const MyVenue = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [venues, setVenues] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [editingVenue, setEditingVenue] = useState(null);
  const [rand, setRand] = useState(0)
  const [choosenFile, setChoosenFile] = useState(null)
  const [choosenId, setChoosenId] = useState(null)

  const navigate = useNavigate()

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingVenue(null);
  };

  const addVenue = (venue) => {
    createVenue(venue).then((res)=>venue.id = res.data);
    setVenues([...venues, venue]);
    closeModal();
  };

  const editVenue = (index, updatedVenue) => {
    const updatedVenues = venues.map((venue, i) =>
      i === index ? updatedVenue : venue
    );
    setVenues(updatedVenues);
    closeModal();
    updateVenue(updatedVenue);
  };

  const handleEditClick = (index) => {
    navigate(`/updateVenue/${venues[index].id}`)
  };

  const handleFile = (event) => {
    setChoosenFile(event.target.files[0]);
    setChoosenId(venues[selectedVenue].id)
    setImage(event.target.files[0], venues[selectedVenue].id)
  };

  useEffect(() => {
    getMyVenues().then((u) => {
      setVenues(u.data);
      setRand(Math.random())
    });
  }, [selectedVenue]);

  const selectVenue = (index) => setSelectedVenue(index);

  return (
    <div className="my-venue-page">
      <h1>My Venue</h1>

      <div className="my-venue-tabs">
        {venues.map((venue, index) => (
          <VenueTab
            key={index}
            index={index}
            venue={venue}
            isActive={selectedVenue === index}
            onClick={() => {
              selectVenue(index);
            }}
            onEdit={() => handleEditClick(index)}
          />
        ))}
        <button className="open-modal-btn" onClick={()=>navigate("/createVenue")}>
          +
        </button>
      </div>

      {selectedVenue !== null && (
        <div className="my-venue-info">
          <div className="venue-details">
            <h2>{venues[selectedVenue].name}</h2>
            <p><strong>Address:</strong> {venues[selectedVenue].address}</p>
            <p><strong>Description:</strong> {venues[selectedVenue].description}</p>
            <p><strong>Email:</strong> {venues[selectedVenue].email}</p>
            <p><strong>Contact:</strong> {venues[selectedVenue].contactNumber}</p>
            <p><strong>Average Price:</strong> ${venues[selectedVenue].averagePrice}</p>
            <p><strong>Location:</strong> {venues[selectedVenue].latitude}, {venues[selectedVenue].longtitude}</p>
          </div>
          <div className="my-venue-logo-container">
            <div className="my-venue-logo">
              <img alt="Logo" src={(choosenFile && venues[selectedVenue].id===choosenId) ? URL.createObjectURL(choosenFile) : venues[selectedVenue].logoUrlPath + `?v=${rand}`} width={456} height={512}/>
            </div>
            {/* <input className="edit-image-btn" onClick={onFileChange} type="file"/> */}
            <label onChange={handleFile} htmlFor="formId">
              <input name="" type="file" id="formId" hidden accept="image/*" />
              <div className="edit-image-btn">
                Edit Image
              </div>
            </label>
          </div>
        </div>
      )}

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <VenueForm
            onSubmit={editingVenue ? (updatedVenue) => editVenue(editingVenue.index, updatedVenue) : addVenue}
            initialData={editingVenue}
          />
        </Modal>
      )}
      {selectedVenue !== null && (
        <MenuList venue={venues[selectedVenue]}></MenuList>
      )}

      {/* DELETE VENUE BUTTON */}
    </div>
  );
};

export default MyVenue;
