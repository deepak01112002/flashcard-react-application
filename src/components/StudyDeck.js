import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck } from "../utils/api";


const StudyDeck = () => {
  const [foundDeck, setFoundDeck] = useState({
    name: "", description: "", id: 0, cards: []
  })

  const [studyCard, setStudyCard] = useState()

  const { deckId } = useParams();

  useEffect(() => {
    async function getDeck(deckId) {
      const controller = new AbortController();
      const { signal } = controller;

      try {
        const deck = await readDeck(deckId, signal);
        const { name, description, cards, id } = deck;
        setFoundDeck({ name: name, description: description, cards: cards, id: id })
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error("Failed to read deck:", error);
        }
      }
    }
    getDeck(deckId);

  }, [])


  const listItems = foundDeck.cards.map((card, index) => (
    <div className="study-page-card">
      <h3>Card {index + 1} of {foundDeck.cards.length}</h3>
      <li>{card.front}</li>
      <Link className="flip-button">Flip</Link>
      <Link className="next-button">Next</Link>
    </div>
  ))

  return (
    <div className="study-page-all-cards">
      <h2>Study: {foundDeck.name}</h2>
      <ul>{listItems}</ul>
    </div>
  )
}

export default StudyDeck