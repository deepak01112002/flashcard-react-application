import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";


const StudyDeck = () => {
  const [foundDeck, setFoundDeck] = useState({
    name: "", description: "", id: 0, card: []
  })
  const { deckId } = useParams()


  useEffect(() => {
    async function getDeck(deckId) {
      const controller = new AbortController();
      const { signal } = controller;

      try {
        const deck = await readDeck(deckId, signal);
        const {name, description, cards, id} = deck;
        setFoundDeck({name: name, description: description, cards: cards, id: id})
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error("Failed to read deck:", error);
        }
      }
    }
    getDeck(deckId);

    
  }, [])

  return (
    <p>{foundDeck.name}</p>
  )
}

export default StudyDeck