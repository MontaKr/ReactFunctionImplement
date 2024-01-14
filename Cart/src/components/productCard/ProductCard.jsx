import React from 'react'
import { Wrap } from './ProductCardStyle'
import { useStore } from '../../store/zustand'

const ProductCard = ({item, key}) => {

  // 숫자 포매팅
  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number)
  }

  const addToCart = useStore(state=> state.addToCart);


  return (
    <Wrap key={key}>
      <div className="cardWrap">
        <div className="imgWrap">
          <img src={item.url} alt="itemImage" />
        </div>
        <div className="contentWrap">
          <div className='contentWrap__name'>{item.name}</div>
          <div className='contentWrap__content'>{item.content}</div>
          <div className='contentWrap__priceWrap'>
            {
              item.originalPrice && item.bargain ? 
              <>
                <div className="priceWrap__cost1Wrap">
                  <b>{formatNumber(item.price)}</b>원
                </div>
                <div className="priceWrap__cost2Wrap">
                  <b>{formatNumber(item.originalPrice)}</b>원
                </div>
                <div className="priceWrap__rateWrap">
                  <b>{formatNumber(item.bargain)}</b>%
                </div>
              </> :
              <>
                <div className="priceWrap__cost1Wrap">
                  <b>{formatNumber(item.price)}</b>원
                </div>
              </>
            }
           
          </div>
        </div>
      </div>
      <div className="product__hover">
        <button className='product__hover--cart' onClick={()=>{addToCart(item)}}></button>
      </div>
    </Wrap>
  )
}

export default ProductCard