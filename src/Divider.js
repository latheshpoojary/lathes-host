
// import { Card } from "react-bootstrap";

import CardDesign from "./CardDesign";
// import { useRef } from "react";

const Divider = ({ card, setCard,progress,setProgress }) => {
  console.log(
    "card status",
    card.map((item) => item.status)
  );

  return (
    <section>
      <article>
        <div className="Todo">
          <header>
            <h3>To-Do</h3>
            <p className="Count-Card">{card == null ? 0 : card.length - 1}</p>
          </header>
          <input type="search" placeholder="Enter the Card Title to Search" />
          <div>
            {card != null ? (
              card.length ? (
                <CardDesign
                  card={card.filter((item) => item.status == "todo")}
                  cardocument={card}
                  progress={progress}
                  setProgress={setProgress}
                />
              ) : (
                <p>List is Empty</p>
              )
            ) : (
              <p>List is Empty</p>
            )}
          </div>
        </div>
        <div className="Progress">
          <header>
            <h3>In Progress</h3>
            <p className="Count-Card">2</p>
          </header>
          <input type="search" placeholder="Enter the Card Title to Search" />
          <div>
            {card != null &&
            card.filter((item) => item.status == "progress").length!='0' ? (
              <CardDesign
                card={card.filter((item) => item.status == "progress")}
                cardocument={card}
              />
            ) : (
              <p>List is Empty</p>
            )}
          </div>
        </div>

        <div className="Done">
          <header>
            <h3>Completed</h3>
            <p className="Count-Card">2</p>
          </header>
          <input type="search" placeholder="Enter the Card Title to Search" />
          <div>
            {card != null ? (
              card.length ? (
                <CardDesign
                  card={card.filter((item) => item.status == "done")}
                  cardocument={card}
                />
              ) : (
                <p>List is Empty</p>
              )
            ) : (
              <p>List is Empty</p>
            )}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Divider