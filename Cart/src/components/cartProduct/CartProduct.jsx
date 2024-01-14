import React from 'react'
import { Wrap } from './CartProductStyle'
import { useStore } from '../../store/zustand'

const CartProduct = ({item, index}) => {

  const increaseQuantity = useStore(state=>state.increaseQuantity);
  const decreaseQuantity = useStore(state=>state.decreaseQuantity);
  const removeFromCart = useStore(state=>state.removeFromCart);
  const toggleItemChecked = useStore(state=>state.toggleItemChecked)

  // 숫자 포매팅
  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number)
  }

  return (
    <Wrap>
     <div className="check">
      <span className="check__form">
        <input 
          id={`cart-${index}`} 
          type="checkbox" 
          checked={item.isChecked}
          onChange={()=>{toggleItemChecked(index)}} />
        <label htmlFor={`cart-${index}`} />
      </span>
     </div>
     <div className="title">
      <div className="title__img">
        <img src={item.url} alt="itemImage" />
      </div>
      <div className="title__text">{item.content}</div>
     </div>
     <div className="fee">
      <div className="fee--currentPrice">{formatNumber(item.price)}</div>
      {
        item.originalPrice && 
        <div className='fee--originalPrice'><del>{formatNumber(item.originalPrice)}</del></div>
      }
     </div>
     <div className="amount">
      <button onClick={()=>{decreaseQuantity(index)}}>-</button>
      <div>{item.quantity}</div>
      <button onClick={()=>increaseQuantity(index)}>+</button>
     </div>
     <div className="price">
      <span>
        <b>{formatNumber(item.price * item.quantity)}</b>원
      </span>
     </div>
     <div className="del">
      <button onClick={()=>{removeFromCart(index)}}>카트에서 삭제하기</button>
     </div>
    </Wrap>
  )
}

export default CartProduct