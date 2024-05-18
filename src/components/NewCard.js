import React, { useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom"
import CardForm from "./CardForm"
import { readDeck } from "../utils/api/index"

//import styles
import "../styles/new-card.css"


const NewCard = ({ foundDeck, setCardFormData, cardFormData, intialCardFormData }) => {

  const [deck, setDeck] = useState({})
  const {deckId} = useParams();
  
  useEffect(() => {
    async function retrieveDeckData(deckId) {
        const controller = new AbortController();
        const { signal } = controller
        try {
          const data = await readDeck(deckId, signal)
          setDeck({...data
          })
        } catch (error) {
          if (error.name !== "AbortError") {
            console.error("Failed to read deck", error)
          }
        }
    }
    retrieveDeckData(deckId)
    //RETURN ABORT CONTROLLER
  }, [])
  
  return (
    <>
    <div className='nav-bar'>
        <p><Link to="/">Home </Link> / <Link to={`/decks/${deckId}`}>{deck.name}</Link> / <p>Add Card</p></p>
      </div>
    {<CardForm
      cardFormData={cardFormData}
      setCardFormData={setCardFormData}
      intialCardFormData={intialCardFormData}
    />}</>
  )
}


export default NewCard