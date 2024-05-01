import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import StudyDeck from "../components/StudyDeck";
import ViewDeck from "../components/ViewDeck";
import Homepage from "../components/Homepage";
import { Routes, Route } from "react-router-dom";
import CreateNewDeck from "../components/CreateNewDeck";
import { useState } from "react";


function Layout() {

  // creating state that will be passed to StudyDeck and ViewDeck to make it easier to render the deck depending on the component
  const [foundDeck, setFoundDeck] = useState({
    name: '',
    description: '',
    id: 0,
    cards: [],
  });

  // creating state that will be passed to HomePage and ViewDeck to make it easier to render the deck depending on the component
  const [existingDecks, setExistingDecks] = useState([]);


  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/"
            element={<Homepage
              existingDecks={existingDecks}
              setExistingDecks={setExistingDecks} />} />
          <Route path="/decks/new"
            element={<CreateNewDeck />} />
          <Route path="/decks/:deckId"
            element={<ViewDeck
              foundDeck={foundDeck}
              setFoundDeck={setFoundDeck}
              existingDecks={existingDecks}
              setExistingDecks={setExistingDecks} />} />
          <Route path="/decks/:deckId/study"
            element={<StudyDeck
              foundDeck={foundDeck}
              setFoundDeck={setFoundDeck} />} />
          <Route path="*"
            element={<NotFound />} />
        </Routes>

      </div>
    </>
  );
}

export default Layout;
