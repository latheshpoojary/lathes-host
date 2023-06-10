import { FaArrowCircleRight } from 'react-icons/fa';
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const CardDesign = ({card}) => {
  console.log("cardDesign:", card);
  
  return (
    <div className='card-collection'>
      {card.map((item) => (
      <div className="card">
        <div className="cardHeader">
          <h3>{item.title}</h3>
          <Button>Edit</Button>
        </div>
        <div className="cardBody">
          <p className="description">{item.desc}</p>
          <p className="date">{item.date}</p>
        </div>
        <div className="footer">
          <FaArrowCircleRight size={45} color="royalBlue" />
        </div>
      </div>
      ))}
    </div>
  );
}

export default CardDesign