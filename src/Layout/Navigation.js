import React from "react";
import { NavLink } from "react-router-dom";




const Navigation = ({ foundDeck }) => {
  const { name, id } = foundDeck
  return (
    <nav>
      <NavLink to="/" >Home</NavLink> /
      <NavLink > {name}</NavLink> /
      <NavLink > Study</NavLink>
    </nav>

  )
}

export default Navigation