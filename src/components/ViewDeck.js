import React, { useEffect } from "react";
import { readDeck } from "../utils/api";
import { useParams } from "react-router-dom";


const ViewDeck = () => {
  const { deckId } = useParams();

  return (
    <h1>{deckId}</h1>
  )
}

export default ViewDeck