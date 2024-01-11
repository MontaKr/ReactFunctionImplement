import React from 'react'
import { Wrap } from './NavigationBarStyle'
import { useNavigate } from 'react-router-dom'

const NavigationBar = () => {

  const naviate = useNavigate()

  return (
    <Wrap>
      <div className="container">
        <button onClick={()=>{naviate("/")}}>Main</button>
        <button onClick={()=>{naviate("/cart")}}>Cart</button>
      </div>
    </Wrap>
  )
}

export default NavigationBar