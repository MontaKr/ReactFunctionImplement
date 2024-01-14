import React from 'react'
import { Wrap } from './NavigationBarStyle'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../store/zustand'

const NavigationBar = () => {

  const cartItems = useStore(state=>state.cartItems)

  const navigate = useNavigate()

  return (
    <Wrap>
      <div className="container">
        <button onClick={()=>{navigate("/")}}>Main</button>
        <button onClick={()=>{navigate("/cart")}}>Cart</button>
        <span className="cart_quantity">카트에 담긴 아이템 수 : {cartItems.length}</span>
      </div>
    </Wrap>
  )
}

export default NavigationBar