import React, { useContext } from 'react'
import { UserContext } from './context/user'

const Home = () => {

  const { currentUser } = useContext(UserContext)

  if (!currentUser || currentUser.error) {
    return (
      <div className='text'>
        <img src="images/logo.png" alt="school logo" width="400px" height="auto" />
        <h3>Please Login or Signup</h3>
        <p>To view our upcoming recitals, click on the tab above.</p>
        <p>As a reminder, you need to have an account with us to purchase tickets.</p>
        <p>Don't have an account? Sign up for free!</p>
        <br />
        <img src="images/homeBanner.png" alt='school banner' width="700px" height="auto" />
      </div>
    )
  } else {
    return (
      <div className='text'>
        <img src="images/logo.png" alt="school logo" width="400px" height="auto" />
        <h1>Welcome {currentUser.username}</h1>
        <br />
        <h3>School Announcements</h3>
        <li>School Dance on Friday at 7 PM, tickets available at the door.</li>
        <li>Student Council meeting tomorrow at lunch in Room 102.</li>
        <li>Book club meeting after school today in the library.</li>
        <li>Yearbook photos taken next week, schedule your appointment now.</li>
        <li>Parent-teacher conferences next month, sign up in the main office.</li>
        <br />
        <br />
        <br />
        <img src="images/homeBanner.png" alt='school banner' width="700px" height="auto" />
      </div>
    )
  }
}

export default Home
