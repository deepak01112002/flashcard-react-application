import { useEffect } from "react"
import CardForm from "./CardForm"


const NewCard = ({ foundDeck, setCardFormData, cardFormData, intialCardFormData }) => {


  return (
    <>{<CardForm
      foundDeck={foundDeck}
      cardFormData={cardFormData}
      setCardFormData={setCardFormData}
      intialCardFormData={intialCardFormData}
    />}</>
  )
}


export default NewCard