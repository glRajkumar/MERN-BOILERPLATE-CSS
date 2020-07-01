import React from 'react'
import { Link } from 'react-router-dom'

function Home(){  
  return(
  <div className="modalBox">
    <h2>Welcome to the Our Web App</h2>
    <p>New to here, <Link to="/signup">Sign Up</Link> </p>
    <p>Already have an accout, <Link to="/login">Login</Link> </p>
  </div>
)
}

export default Home