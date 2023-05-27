import React from 'react'
import Navbar from '../com/Navbar'
import "../styles/welcome.css";

const Welcome = () => {
  return (
   <>
   <Navbar></Navbar>

   <div className="page">
    <h1 className="heading"> Login to Check Stock Prices</h1>
   </div>
   </>
  )
}

export default Welcome