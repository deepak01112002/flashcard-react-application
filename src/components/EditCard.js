import CardForm from "./CardForm"

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