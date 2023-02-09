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

  const [loading, setLoading] = useState(true)
  const [recitals, setRecitals] = useState([])

  useEffect(() => {
    fetch("/recitals")
      .then(r => r.json())
      .then(recitals => setRecitals(recitals))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [])


  const addRecital = recitalList => setRecitals(newRecital => [...newRecital, recitalList])

  const handleDeleteRecital = deletedRecital =>
    setRecitals((recitals) =>
      recitals.filter((recital) => recital.id !== deletedRecital.id)
    );

  const updateRecital = newRecitalDetails => setRecitals(currentRecitalData => {
    return currentRecitalData.map(recitalData => {
      if (recitalData.id === newRecitalDetails.id) {
        return newRecitalDetails
      } else {
        return recitalData
      }
    })
  })

  if (loading) return <h1>Loading</h1>

  return (
    <UserProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/recitals" element={<RecitalList recitals={recitals} />} />
          <Route path="/recitals/:id" element={<RecitalDetails deleteRecital={handleDeleteRecital} />} />
          <Route path="/recitals/new" element={<NewRecitalForm addRecital={addRecital} />} />
          <Route path="/recitals/:id/edit" element={<UpdateRecital updateRecital={updateRecital} />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
