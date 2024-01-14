import React, { useEffect } from 'react'
import { Wrap } from './MainPageStyle'
import data from "../../data/data.json"
import ProductCard from '../../components/productCard/ProductCard'
import { useStore } from '../../store/zustand'

const MainPage = () => {

  const cartItems = useStore(state=>state.cartItems)

  // 카트 확인
  useEffect(()=>{
    console.log(cartItems)
  },[cartItems])

  return (
    <Wrap>
      <div className="container">
        {
          data.map((item, index)=>{
            return (
              <ProductCard key={index} item={item}/>
            )
          })
        }
      </div>
    </Wrap>
  )
}

export default MainPage