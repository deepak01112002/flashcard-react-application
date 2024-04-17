
import React, {useState} from 'react';
import { useNavigate, Link } from "react-router-dom";
import HomepageDecksView from './HomepageDecksView';




const HomePage = () => {
  const [existingDecks, setExistingDecks] = useState([]);

  const navigate = useNavigate();


  return (
    <div className="home-page">
      <Link to={"/decks/new"}>Create Deck</Link>
      <div className='homepage-decks'>
        <HomepageDecksView existingDecks={existingDecks} setExistingDecks={setExistingDecks} />
      </div>
    </div>
  )
}

export default HomePage