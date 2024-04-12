import React, { useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Homepage from "../components/Homepage";
import CreateNewDeck from "../components/CreateNewDeck";

function Layout() {





  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/decks/new" element={<CreateNewDeck />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </>
  );
}

export default Layout;
