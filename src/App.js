import "./App.css";
import { AddIcon } from "./AddIcon";
import Header from "./Header";
import Divider from "./Divider";
import { useState } from "react";


function App() {
  // const [defaultValue, setDefaultValue] = useState([
  //   {
  //     title: "",
  //     desc: "",
  //     date: "",
  //     status:""
  //   },
  // ]);
  // localStorage.setItem("cardList", JSON.stringify(defaultValue));
  const [card, setCard] = useState(
    JSON.parse(localStorage.getItem("cardList") || [])
  );
  const [progress,setProgress] = useState([{
    id:'',
    title:'',
    desc:'',
    date:'',

  }])
  
  const [formId,setFormId] = useState(null);
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
        formId={formId}
        setFormId={setFormId}
      />
      <Divider
        showForm={showForm}
        setShowForm={setShowForm}
        card={card}
        setCard={setCard}
        newCard={newCard}
        setNewCard={setNewCard}
        formId={formId}
        setFormId={setFormId}
      />
    </div>
  );
}
export default App;
