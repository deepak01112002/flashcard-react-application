
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import HomepageDecksView from './HomepageDecksView';




const HomePage = () => {
  const [existingDecks, setExistingDecks] = useState([]);

  const navigate = useNavigate();


  return (
    <div className="home-page">
      <button onClick={() => navigate("/decks/new")}>Create Deck</button>
      <div className='homepage-decks'>
        <HomepageDecksView existingDecks={existingDecks} setExistingDecks={setExistingDecks} />
      </div>
    </div>
  )
}

export default HomePage