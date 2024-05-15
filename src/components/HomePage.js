import React from 'react';
import { Link } from "react-router-dom";
import HomepageDecksView from './HomepageDecksView';



const HomePage = ({ existingDecks, setExistingDecks }) => {

  return (
    <>
      <Link className="grey-button" to={"/decks/new"}>+ Create Deck</Link>
        <div className='homepage-decks'>
          <HomepageDecksView existingDecks={existingDecks} setExistingDecks={setExistingDecks} />
        </div>
    </>

  )
}

export default HomePage