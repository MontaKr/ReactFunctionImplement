import React from 'react'
import { Wrap } from './CartPageStyle'
import { useStore } from '../../store/zustand'
import CartProduct from '../../components/cartProduct/CartProduct'


const CartPage = () => {

  const cartItems = useStore(state=>state.cartItems)

  // 숫자 포매팅
  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number)
  }

  // 총 금액 계산
  const totalPrice = cartItems.reduce((acc, item)=>{
    return item.isChecked ? acc + (parseInt(item.price, 10) * item.quantity) : acc;
  }, 0) 

  return (
    <Wrap>
      <div className="container">
        {
          cartItems.length > 0 ?
          <>
            <div className='table__wrap'>
              <div className="table__top">
                {
                  cartItems.map((item, index)=>{
                    return (
                      <CartProduct key={index} item={item} index={index}/>
                    )
                  })
                }
              </div>
              <div className="table__bottom">
                <div className="bottom__total--price">
                  총금액 : <b>{formatNumber(totalPrice)}</b>원
                </div>
              </div>
            </div>
          </> :
          <div className='noItem'>
            <p>장바구니가 비어있습니다.</p>
          </div>
        }
      </div>
    </Wrap>
  )
}

export default CartPage