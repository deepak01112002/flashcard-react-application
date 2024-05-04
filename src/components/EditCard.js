import CardForm from "./CardForm"
import { readCard } from "../utils/api"
import { useParams } from "react-router-dom"

const EditCard = ( {foundDeck, setCardFormData, cardFormData, intialCardFormData }) => {

  return (
    <>{<CardForm
      foundDeck={foundDeck}
      cardFormData={cardFormData}
      setCardFormData={setCardFormData}
      intialCardFormData={intialCardFormData}
    />}</>
  )
}


export default EditCard