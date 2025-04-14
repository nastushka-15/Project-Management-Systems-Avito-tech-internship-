import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Boards from "./components/Boards/Boards";
import Board from "./components/Board/Board";
import Issues from "./components/Issues/Issues";

function App() {
  return (
    <Router>
      <Boards />
      <Board />
      <Issues />
      <Routes>
        <Route path="/boards" element={<Boards />} />
        <Route path="/board/:id" element={<Boards />} />
        <Route path="/issues" element={<Issues />} />
      </Routes>
    </Router>
  );
}

export default App;
