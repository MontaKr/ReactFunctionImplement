import React from 'react'
import {Route,Routes} from "react-router-dom"
import MainPage from "../pages/main/MainPage"
import CartPage from "../pages/cart/CartPage"

const route = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
    </Routes>
  )
}

export default route