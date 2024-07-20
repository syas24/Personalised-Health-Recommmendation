import React from 'react'
import './Welcome.css'
import Help from './Help'

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to Personalisation Health Recommendation</h1>
      <div className="dialog">
        <h3>Kindly fill in your details</h3><br></br><br></br><br></br>
        Name:<input type='text'></input><br></br><br></br><br></br><br></br>
        Email-Id:<input type='email'></input><br></br><br></br><br></br><br></br>
        Age:<input type='number'></input><br></br><br></br><br></br><br></br>
        <button type='button' onClick={Help.jsx}>Submit</button><br></br><br></br><br></br>
      </div>
    </div>
  )
}
