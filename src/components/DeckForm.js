import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createDeck, readDeck, updateDeck } from "../utils/api";




const DeckForm = ({ foundDeck }) => {

  const { deckId } = useParams();
  const intialFormState = { name: "", description: "", id: "" }
  const [deckData, setDeckData] = useState(intialFormState)
  const navigate = useNavigate();
  //FUNCTION TO HANDLE FORM DATA CHANGE 
  const handleChange = ({ target }) => {
    setDeckData({ ...deckData, [target.name]: target.value })
  }

  //when page renders if there is a deck id present the setDeckData will be called allowing the form to populate with the current deck data

  useEffect(() => {
    if (deckId) {
      async function retrieveDeckData(deckId) {
        const controller = new AbortController();
        const { signal } = controller;
        try {
          const data = await readDeck(deckId, signal)
          setDeckData({
            id: data.id,
            name: data.name,
            description: data.description
          })
        } catch (error) {
          if (error.name !== "AbortError") {
            console.error("Failed to read deck", error)
          }
        }
      }
      retrieveDeckData(deckId)
    }
  }, [])

  //FUNCTION TO HANDLE SUBMIT OF FORM BUTTON
  const handleSubmit = (event) => {
    event.preventDefault();

    async function submitDeck(newDeck) {
      const controller = new AbortController();
      const { signal } = controller;

      try {
        if (!deckId) {
          createDeck(newDeck, signal)
        } else {
          updateDeck(newDeck, signal)
        } 
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Failed to read deck:', error);
        }
      }
    }
    submitDeck(deckData)
    setDeckData({ ...intialFormState })
  }

  return (
    <>
      <div className='nav-bar'>
        <p><Link to="/">Home</Link> / Create Deck</p>
      </div>

      <div className="Create-New-Deck">
        <h1>Create Deck</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>
            Name
            <input
              id='name'
              type='text'
              name='name'
              placeholder='Deck Name'
              value={deckData.name}
              onChange={handleChange} />
          </label>
          <label htmlFor='description'>
            Description
            <textarea id='description'
              name='description'
              rows='5'
              columns='40'
              placeholder='Brief description of deck'
              value={deckData.description}
              onChange={handleChange} />
          </label>

          <button onClick={() => navigate("/")}>Cancel</button>
          <button type="submit" >Submit</button>
        </form>
      </div>
    </>
  )
}

export default DeckForm