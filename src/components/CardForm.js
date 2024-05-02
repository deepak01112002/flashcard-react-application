import { useNavigate, useParams } from "react-router-dom";



const CardForm = ({ cardFormData, setCardFormData, foundDeck, intialCardFormData, existingDecks, setExistingDecks }) => {
  const navigate = useNavigate();
  const { cardId, deckId } = useParams();
  const deckCards = foundDeck.cards
  
  const cardInfo = deckCards.find((card) => Number(cardId) === card.id);
  //handle submit for when save button is pushed
  const handleSubmit = (event) => {
    event.preventDefault();

    setCardFormData(intialCardFormData)
  }

  const handleCancel = () => {
    setCardFormData(intialCardFormData)
    navigate(`/decks/${deckId}`)   
  }

  return (
    <div className="card-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="cardFront">Front</label>
        <textarea type="text" id="cardFront" name="cardFront" />
        <label htmlFor="cardBack">Back</label>
        <textarea type="text" id="cardBack" name="cardBack" />
        <button onClick={handleCancel}>{cardId ? "Cancel" : "Done"}</button>
        <button type="submit">Save</button>
      </form>
    <button onClick={() => {
      console.log(cardInfo)
    }}>Test</button>
    </div>
  )
}

export default CardForm