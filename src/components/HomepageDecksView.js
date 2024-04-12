import React, { useEffect } from "react";
import { listDecks } from "../utils/api";

const HomepageDecksView = ({ existingDecks, setExistingDecks }) => {

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
          <button>View</button>
          <button>Study</button>
          <button>🗑️</button>
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