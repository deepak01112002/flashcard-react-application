
import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { createDeck } from '../utils/api';

const CreateNewDeck = ({ deck, setDeck }) => {
  const intialFormState = { "name": "", "description": "" }
  const [deckData, setDeckData] = useState(intialFormState)

  //FUNCTION TO HANDLE FORM DATA CHANGE 
  const handleChange = ({ target }) => {
    setDeckData({ ...deckData, [target.name]: target.value })
  }
  // ASSIGN NAVIGATE FUNCTION TO NAVIGATE VARIABLE
  const navigate = useNavigate();

  //FUNCTION TO HANDLE SUBMIT OF FORM BUTTON
  const handleSubmit = (event) => {
    event.preventDefault();
    async function submitDeck(newDeck) {
      const controller = new AbortController();
			const { signal } = controller;

      try {
        createDeck(newDeck, signal)
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


export default CreateNewDeck