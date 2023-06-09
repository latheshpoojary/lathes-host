import { FaPlus } from 'react-icons/fa';

import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
export const AddIcon = () => {
  
  const [show, setShow] = useState(false);
  const [inputField,setInputField] = useState({
    title:'',
    desc:'',
    date:''
})
  const handleTitle = (e)=>setInputField(...inputField,title=e.target.value)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit= ()=> console.log({inputField});

  return (
    <>
    {/* <div >  </div> */}
    <div variant="primary" onClick={handleShow} className='add-btn'>
        <FaPlus size={32} />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add ToDo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='myForm'>
            <label htmlFor="title">Title</label>
            <input type="text" placeholder='Enter the Todo Title' onChange={handleTitle}/>
            <label htmlFor="description">Description</label>
            <input type="text" placeholder='Enter the Todo Description'/>
            <label htmlFor="date">Target Date</label>
            <input type="date" name="date" id="date" />
          </form>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
