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
import Login from "./Login";

function App() {
  const [user, setUser] = useState(false)
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

  const updateUser = user => {
    setUser(user)
  }

  if (errors) return <h1>{errors}</h1>


  return (
    <div className="App">
      <NavBar currentUser={user} updateUser={updateUser}  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recitals" element={<RecitalList recitals={recitals} />} />
        <Route path="/recitals/:id" element={<BuyTickets />} />
        <Route path="/recitals/add" element={<NewRecitalForm />} />
        <Route path="/users/new" element={<SignUp updateUser={updateUser} />} />
        {/* <Route path="/users/:id" element={<ProfilePage updateUser={updateUser} currentUser={user} />} /> */}
        <Route path="/login" element={<Login updateUser={updateUser} />} />
      </Routes>
    </div>
  );
}

export default App;
