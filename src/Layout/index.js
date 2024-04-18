import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Homepage from "../components/Homepage";
import CreateNewDeck from "../components/CreateNewDeck";
import ViewDeck from "../components/ViewDeck";
import StudyDeck from "../components/StudyDeck";
import Navigation from "./Navigation";

function Layout() {


  return (
    <>
      <Header />
      <div className="container">
      <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/decks/new" element={<CreateNewDeck />} />
          <Route path="/decks/:deckId" element={<ViewDeck />}/>
          <Route path="/decks/:deckId/study" element={<StudyDeck/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </>
  );
}

export default Layout;
