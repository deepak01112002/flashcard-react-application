import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteDeck, listDecks } from "../utils/api";



const HomepageDecksView = ({ existingDecks, setExistingDecks }) => {





  //retrieves all deck and updates the state upon intial render of page
  useEffect((event) => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchDecks() {
      try {
        const decks = await listDecks(signal);
        setExistingDecks(decks)
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Failed to retrieve decks:', error);
        }
      }

    }
    fetchDecks();
  }, [])

  //delete handler to delete deck from api
  const handleDeleteDeck = async (deckId) => {
    const controller = new AbortController();
    const { signal } = controller;

    try {
      await deleteDeck(deckId, signal);
      const updatedDecks = existingDecks.filter(deck => deck.id !== deckId);
      setExistingDecks(updatedDecks);
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Failed to delete deck:', error)
      }
    }

  }






  const listItems = existingDecks.map((deck, index) => (
    <li className="deck-list-items" key={index}>
      <div>
        <h3>{deck.name}</h3>
        <h4>{deck.description}</h4>
        <div className="deck-list-buttons">
          <Link to={`/decks/${deck.id}`}>View</Link>
          <Link to={`/decks/${deck.id}/study`}>Study</Link>
          <button onClick={() => handleDeleteDeck(deck.id)}>🗑️</button>
        </div>

      </div>
    </li>
  ))

  return (
    <>
      <ul>
        {listItems}
      </ul>
    </>
  )
}


export default HomepageDecksView;