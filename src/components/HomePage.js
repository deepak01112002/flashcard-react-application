import React, {useState} from 'react';
import { useNavigate, Link } from "react-router-dom";
import HomepageDecksView from './HomepageDecksView';

//styling
import "../styles/homepage.css"



const HomePage = ({existingDecks, setExistingDecks}) => {
  

  const navigate = useNavigate();


  return (
    <div className="home-page">
      <Link className="grey-button" to={"/decks/new"}>+ Create Deck</Link>
      <div className='homepage-decks'>
        <HomepageDecksView existingDecks={existingDecks} setExistingDecks={setExistingDecks} />
      </div>
    </div>
  )
}

export default HomePage