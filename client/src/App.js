import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import NavBar from "./NavBar";
import Home from "./Home";
import RecitalList from "./RecitalList";
import NewRecitalForm from "./NewRecitalForm";
import BuyTickets from "./BuyTickets";
import ProfilePage from "./ProfilePage";
import SignUp from "./SignUp";
import './App.css';

function App() {
  const [recitals, setRecitals] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetch("/recitals")
      .then(r => {
        if (r.ok) {
          r.json().then(setRecitals)
        } else {
          r.json().then(data => setErrors(data.error))
        }
      })
  }, [])

  if (errors) return <h1>{errors}</h1>


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recitals" element={<RecitalList recitals={recitals} />} />
        <Route path="/recitals/:id" element={<BuyTickets />} />
        <Route path="/recitals/add" element={<NewRecitalForm />} />
        <Route path="/users/:id" element={<ProfilePage />} />
        <Route path="/users/new" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
