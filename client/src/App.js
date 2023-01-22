import React from "react"
import { Routes, Route } from "react-router-dom"
import NavBar from "./NavBar";
import Home from "./Home";
import RecitalList from "./RecitalList";
import BuyTickets from "./BuyTickets";
import './App.css';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recitals" element={<RecitalList />} />
        <Route path="/recitals/:id" element={<BuyTickets />} />
      </Routes>
    </div>
  );
}

export default App;
