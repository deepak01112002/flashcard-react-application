
import React from 'react';
import { useNavigate } from "react-router-dom";





const HomePage = () => {
  
  const navigate = useNavigate();


  return (
    <div className="home-page">
      <button onClick={() => navigate("/decks/new")}>Create Deck</button>

    </div>
  )
}

export default HomePage