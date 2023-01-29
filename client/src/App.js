import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { UserProvider } from "./context/user";
import NavBar from "./NavBar";
import Home from "./Home";
import RecitalList from "./RecitalList";
import RecitalDetails from "./RecitalDetails";
import NewRecitalForm from "./NewRecitalForm";
import UpdateRecital from "./UpdateRecital";
import SignUp from "./SignUp";
import Login from "./Login";
import ProfilePage from "./ProfilePage";
import './App.css';

function App() {

  const [recitals, setRecitals] = useState([])

  useEffect(() => {
    fetch("/recitals")
      .then(r => {
        if (r.ok) {
          r.json().then(setRecitals)
        } else {
          r.json().then(data => alert(data.error))
        }
      })
  }, [])


  const addRecital = recital => setRecitals(active => [...active, recital])
  const deleteRecital = id => setRecitals(active => active.filter(recital => recital.id !== id))
  const updateRecital = selectedRecital => setRecitals(active => {
    return active.map(recital => {
      if(recital.id === selectedRecital.id) {
        return selectedRecital
      } else {
        return recital
      }
    })
  })



  return (
    <UserProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/recitals" element={<RecitalList recitals={recitals} />} />
          <Route path="/recitals/:id" element={<RecitalDetails deleteRecital={deleteRecital}  />} />
          <Route path="/recitals/new" element={<NewRecitalForm addRecital={addRecital} />} />
          <Route path="/recitals/:id/edit" element={<UpdateRecital updateRecital={updateRecital}/>} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
