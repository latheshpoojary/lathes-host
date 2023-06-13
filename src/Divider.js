
// import { Card } from "react-bootstrap";

import CardDesign from "./CardDesign";
// import { useRef } from "react";
import { useState } from "react";
const Divider = ({
  showForm,
  setShowForm,
  card,
  setCard,
  progress,
  setProgress,
  newCard,
  setNewCard,
}) => {
  // console.log(
  //   "card status",
  //   card.map((item) => item.status)
  // );
  const [searchTodo, setSearchTodo] = useState("");
  const [searchProgress, setSearchProgress] = useState("");
  const [searchDone, setSearchDone] = useState("");
  const handleSearchDone = (e) => {
    setSearchDone(e.target.value);
  };
  const handleSearchProgress = (e) => {
    setSearchProgress(e.target.value);
  };
  const handleSearchTodo = (e) => {
    setSearchTodo(e.target.value);
  };

  return (
    <section>
      <article>
        <div className="Todo">
          <header>
            <h3>To-Do</h3>
            <p className="Count-Card">
              {card == null
                ? 0
                : card.filter((item) => item.status == "todo").length}
            </p>
          </header>
          <input
            type="search"
            placeholder="Enter the Card Title to Search"
            onChange={handleSearchTodo}
          />
          <div>
            {card != null &&
            card.filter((item) => item.status == "todo").length != "0" ? (
              <CardDesign
                card={card.filter((item) => {
                  return (
                    item.status === "todo" &&
                    item.title.toLowerCase().includes(searchTodo.toLowerCase())
                  );
                })}
                showForm={showForm}
                setShowForm={setShowForm}
                cardocument={card}
                setCard={setCard}
                progress={progress}
                setProgress={setProgress}
                newCard={newCard}
                setNewCard={setNewCard}
              />
            ) : (
              <p>List is Empty😕</p>
            )}
          </div>
        </div>
        <div className="Progress">
          <header>
            <h3>In Progress</h3>
            <p className="Count-Card">
              {card == null
                ? 0
                : card.filter((item) => item.status == "progress").length}
            </p>
          </header>
          <input
            type="search"
            placeholder="Enter the Card Title to Search"
            onChange={handleSearchProgress}
          />
          <div>
            {card != null &&
            card.filter((item) => item.status == "progress").length != 0 ? (
              <CardDesign
                card={card.filter((item) => {
                  return (
                    item.status === "progress" &&
                    item.title
                      .toLowerCase()
                      .includes(searchProgress.toLowerCase())
                  );
                })}
                showForm={showForm}
                setShowForm={setShowForm}
                cardocument={card}
                setCard={setCard}
                progress={progress}
                setProgress={setProgress}
                newCard={newCard}
                setNewCard={setNewCard}
              />
            ) : (
              <p>List is Empty😕</p>
            )}
          </div>
        </div>

        <div className="Done">
          <header>
            <h3>Completed</h3>
            <p className="Count-Card">
              {card == null
                ? 0
                : card.filter((item) => item.status == "done").length}
            </p>
          </header>
          <input
            type="search"
            placeholder="Enter the Card Title to Search"
            onChange={handleSearchDone}
          />
          <div>
            {card != null &&
            card.filter((item) => item.status == "done").length != 0 ? (
              <CardDesign
                card={card.filter((item) => {
                  return (
                    item.status === "done" &&
                    item.title.toLowerCase().includes(searchDone.toLowerCase())
                  );
                })}
                showForm={showForm}
                setShowForm={setShowForm}
                cardocument={card}
                setCard={setCard}
                progress={progress}
                setProgress={setProgress}
                newCard={newCard}
                setNewCard={setNewCard}
              />
            ) : (
              <p>List is Empty😕</p>
            )}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Divider