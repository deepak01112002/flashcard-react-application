import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { listDecks } from "../utils/api";



const HomepageDecksView = ({ existingDecks, setExistingDecks }) => {

  const handleDelete = (event) => {

  }


  useEffect((event) => {
    async function allDecks() {
      const decks = await listDecks();
      setExistingDecks(decks)
    }
    allDecks();
  }, [])


  const listItems = existingDecks.map((deck, index) => (
    <li className="deck-list-items" key={index}>
      <div>
        <h3>{deck.name}</h3>
        <h4>{deck.description}</h4>
        <div className="deck-list-buttons">
          <Link to={`/decks/${deck.id}`}>View</Link>
          <Link to={`/decks/${deck.id}/study`}>Study</Link>
          <button onClick={handleDelete}>🗑️</button>
        </div>

      </div>
    </li>
  ))

  console.log(listItems)
  return (
    <>
      <ul>
        {listItems}
      </ul>
    </>
  )
}


export default HomepageDecksView;