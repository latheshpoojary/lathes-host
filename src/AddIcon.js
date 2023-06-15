import { FaPlus } from "react-icons/fa";

import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
// import Divider from "./Divider";
// import CardDesign from "./CardDesign";
export const AddIcon = ({
  showForm,
  setShowForm,
  card,
  setCard,
  newCard,
  setNewCard,
  formId,
  setFormId
}) => {
  const [editForm, setEditForm] = useState({
    title: "",
    desc: "",
    date: "",
  });

  const setAndSaveItem = (item) => {
    setCard(item);
    localStorage.setItem("cardList", JSON.stringify(card));
  };
  const addItem = (newCard) => {
   
    
    const temp = {
      id: card.length,
      title: newCard.title,
      desc: newCard.desc,
      date: newCard.date,
      status: "todo",
    };
    if(formId){
      temp.id=formId;
      const component = card.slice();
      const parsedNumber = parseInt(formId, 10); 
      component[parsedNumber] = temp;
      console.log(component,"component");
      setAndSaveItem(component);
      setFormId(null);
    }
    else{
      const listItem = [...card, temp];
      setAndSaveItem(listItem);
    }
   
    

    
  };

  const handleShow = () => {
    setShowForm(true);
  };
  const handleClose = () => {
    setShowForm(false);
  };
  const handleChange = (e) => {
    setNewCard({ ...newCard, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    console.log("id", e.target.id);
    e.preventDefault();
    if (!newCard) return;
    
    addItem(newCard);
    setNewCard("");
    setShowForm(false);
  }

  return (
    <>
      <div variant="primary" onClick={handleShow} className="add-btn">
        <FaPlus size={32} />
      </div>

      <Modal show={showForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add ToDo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="myForm" id={newCard.length} onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Enter the Todo Title"
              name="title"
              value={newCard.title}
              onChange={handleChange}
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              placeholder="Enter the Todo Description"
              name="desc"
              value={newCard.desc}
              onChange={handleChange}
            />
            <label htmlFor="date">Target Date</label>
            <input
              type="date"
              name="date"
              value={newCard.date}
              id="date"
              onChange={handleChange}
            />
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
