
import './App.css';
import { AddIcon } from './AddIcon';
import Header from './Header';
import Divider from './Divider';
import { useState } from 'react';

function App() {
  const [card,setCard] = useState([]);
  const [newCard,setNewCard] =useState([]);

  
 
  
  return (
    

   <div>
     <Header/>
     <Divider
      card={card}
     />
      <AddIcon
      card={card}
      setCard={setCard}
      newCard={newCard}
      setNewCard={setNewCard}/>
   </div>
     
    
  );

  }
export default App;
