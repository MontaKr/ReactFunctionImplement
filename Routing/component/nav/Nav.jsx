import React from 'react'
import { Wrap } from './NavStyles'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

  const navigate = useNavigate();

  return (
    <Wrap>
      <div className="container">
        <button onClick={()=>{navigate("/")}}>Home</button>
        <button onClick={()=>{navigate("/second")}}>Second</button>
        <button onClick={()=>{navigate("/third")}}>Third</button>
      </div>
    </Wrap>
  )
}

export default Nav