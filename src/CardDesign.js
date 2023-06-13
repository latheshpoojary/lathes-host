import { FaArrowCircleRight } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Ref, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const CardDesign = ({
  showForm,
  setShowForm,
  card,
  cardocument,
  setCard,
  newCard,
  setNewCard
}) => {
  console.log("cardDesign:", cardocument);
  console.log(card);
  const footerArrow = useRef();
  function changeStatus(index, status) {
    console.log(status);
    // console.log("hello there");
    const obj = [...cardocument];

    console.log("index", index);
    if (status === "todo") {
      obj[index].status = "progress";
    } else if (status === "progress") {
      obj[index].status = "done";
    } else {
      return;
    }
    setCard(obj);
    // console.log(card);
  }
  const handleShow = (e) => {
    // const formValue={
    //   title:car
    // }
    console.log("id",e.target.id);
    const cardValue={...cardocument};
    const formValue = {
      title: cardValue[e.target.id].title,
      desc: cardValue[e.target.id].desc,
      date: cardValue[e.target.id].date
    };
    setNewCard(formValue);
    setShowForm(true);
    

  };
  console.log(cardocument);

  //
  return (
    <div className="card-collection">
      {card &&
        card.map((item) =>
          item.title && item.desc && item.date ? (
            <div className="card" id={card == null ? 1 : card.length + 1}>
              <div className="cardHeader">
                <h3>{item.title}</h3>
                <Button id={item.id} onClick={handleShow}>
                  Edit
                </Button>
              </div>
              <div className="cardBody">
                <p className="description">{item.desc}</p>
                <p className="date">{item.date}</p>
              </div>
              <div className="footer">
                <FaArrowCircleRight
                  className="dir"
                  size={45}
                  color="royalBlue"
                  Ref={footerArrow}
                  onClick={() => changeStatus(item.id, item.status)}
                />
              </div>
            </div>
          ) : (
            ""
          )
        )}
    </div>
  );
};

export default CardDesign;
