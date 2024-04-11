import React, { useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import HomePage from "../components/HomePage";
import CreateNewDeck from "../components/CreateNewDeck";

function Layout() {
 


  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/decks/new" element={<CreateNewDeck />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </>
  );
}

export default Layout;
