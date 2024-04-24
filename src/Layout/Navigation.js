import React from "react";
import { NavLink } from "react-router-dom";




const Navigation = ( {foundDeck} ) => {
  return (
    <nav>
      <NavLink to="/" >Home /</NavLink>
      <NavLink > {foundDeck.name} /</NavLink>
      <NavLink> Study</NavLink>
    </nav>
    
  )
}

export default Navigation