import { useParams } from "react-router-dom"
import DeckForm from "./DeckForm";



const EditDeck = ( {foundDeck} ) => {
  
  return (
    <DeckForm foundDeck={foundDeck}/>
  )
}


export default EditDeck