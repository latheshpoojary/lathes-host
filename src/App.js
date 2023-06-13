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

  const [newCard, setNewCard] = useState({ title: "", desc: "", date: "" });

  return (
    <div>
      <Header />
      <AddIcon
        card={card}
        setCard={setCard}
        newCard={newCard}
        setNewCard={setNewCard}
        progress={progress}
        setProgress={setProgress}
      />
      <Divider card={card}
      setCard={setCard} />
    </div>
  );
}
export default App;
