import "./App.css";
import { AddIcon } from "./AddIcon";
import Header from "./Header";
import Divider from "./Divider";
import { useState } from "react";
import { Card } from "react-bootstrap";

function App() {
  const [defaultValue, setDefaultValue] = useState([
    {
      title: "",
      desc: "",
      date: "",
      status:""
    },
  ]);
  localStorage.setItem("cardList", JSON.stringify(defaultValue));
  const [card, setCard] = useState(
    JSON.parse(localStorage.getItem("cardList"))
  );
  const [progress,setProgress] = useState([{
    id:'',
    title:'',
    desc:'',
    date:'',

  }])
  
  console.log(card);
   const [showForm, setShowForm] = useState(false);
  const [newCard, setNewCard] = useState({ title: "", desc: "", date: "" });

  return (
    <div>
      <Header />
      <AddIcon
        showForm={showForm}
        setShowForm={setShowForm}
        card={card}
        setCard={setCard}
        newCard={newCard}
        setNewCard={setNewCard}
        progress={progress}
        setProgress={setProgress}
      />
      <Divider
        showForm={showForm}
        setShowForm={setShowForm}
        card={card}
        setCard={setCard}
        newCard={newCard}
        setNewCard={setNewCard}
      />
    </div>
  );
}
export default App;
