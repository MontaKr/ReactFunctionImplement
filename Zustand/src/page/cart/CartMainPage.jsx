import React from 'react'
import { Wrap } from './CartMainPageStyle'
import { useStore } from '../../store/Zustand'

const CartMainPage = () => {

  const {count, plus, minus} = useStore()

  return (
    <Wrap>
      <div className="container">
        <button onClick={minus}>-</button>
        <div>{count}</div>
        <button onClick={plus}>+</button>
      </div>
    </Wrap>
  )
}

export default CartMainPage