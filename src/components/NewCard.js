import { Link } from "react-router-dom"
import CardForm from "./CardForm"


const NewCard = ({ foundDeck, setCardFormData, cardFormData, intialCardFormData }) => {


  return (
    <>
    <div className='nav-bar'>
        <p><Link to="/">Home</Link> / <Link to={`/decks/${foundDeck.id}`}>{foundDeck.name}</Link> / Add Card</p>
      </div>
    {<CardForm
      foundDeck={foundDeck}
      cardFormData={cardFormData}
      setCardFormData={setCardFormData}
      intialCardFormData={intialCardFormData}
    />}</>
  )
}


export default NewCard