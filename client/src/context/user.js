import React, { useState, useEffect } from 'react'

const UserContext = React.createContext()

function UserProvider({ children }) {

  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
    fetch('/me')
      .then(r => r.json())
      .then(data => {
        setCurrentUser(data)
      })
  }, [])

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }

