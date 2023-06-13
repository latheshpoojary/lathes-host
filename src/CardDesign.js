import { FaArrowCircleRight } from 'react-icons/fa';
import { Button } from "react-bootstrap";
import { Ref, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
const CardDesign = ({ card, cardocument ,progress,setProgress}) => {
  console.log("cardDesign:", cardocument);
  console.log(card);
  function changeDirection(index) {
     const temp={id:index,title:'',desc:'',date:''}
    const [arr,setArr] = useState()
    arr[index]=
    console.log("card element",card);
    console.log(cardocument);
    // console.log("hello there");
    console.log("index",index);
    cardocument[index].status = "progress";
    console.log(card);
    
  };
  // 
  return (
    <div className="card-collection">
      {card &&
        card.map((item) =>
          item.title && item.desc && item.date ? (
            <div className="card" id={card == null ? 1 : card.length + 1}>
              <div className="cardHeader">
                <h3>{item.title}</h3>
                <Button>Edit</Button>
              </div>
              <div className="cardBody">
                <p className="description">{item.desc}</p>
                <p className="date">{item.date}</p>
              </div>
              <div className="footer">
                <FaArrowCircleRight
                  size={45}
                  color="royalBlue"
                  onClick={()=>changeDirection(item.id)}
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

export default CardDesign