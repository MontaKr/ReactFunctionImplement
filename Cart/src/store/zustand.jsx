import create from "zustand"
import { devtools } from "zustand/middleware"

export const useStore = create(devtools((set)=>({
  cartItems : [],

  // 함수(){} 형식
  // 카트에 추가
  addToCart(item) {
    set((state)=>{
      // cart배열에 담은 아이템이 존재하는 지 확인
      const existingItemIndex = state.cartItems.findIndex((cartItem) => cartItem.name === item.name);

      // 카트에 이미 같은 이름의 아이템이 있을 때
      if(existingItemIndex !== -1) {
        const updatedCartItems = state.cartItems.map((cartItem, index)=>{
          if(index === existingItemIndex) {
            return {...cartItem, quantity : cartItem.quantity + 1}
          }
            
          return cartItem;
        });

        // 결과값 반환
        return {cartItems : updatedCartItems}
      } 
      
      // 카트에 새로운 아이템이 담겼을 때
      else {

        // 결과값 반환
        return {cartItems : [...state.cartItems, { ...item, quantity : 1, isChecked : true}]}
      }
    })
  },

  // 함수 : ()=>{} 형식
  // 카트에서 제거
  removeFromCart : (index) => set((state)=>({
    cartItems : state.cartItems.filter((_,i) => i !== index)
  })),

  // 함수(){} 형식
  // 아이템 수량 증가
  increaseQuantity (index) {
    set((state)=>({
      cartItems : state.cartItems.map((item, i)=>
        i === index ? {...item, quantity : item.quantity + 1} : item
      )
    }))
  },

  // 함수 : ()=>{} 형식
  // 아이템 수량 감소 & 1 미만으로는 수량 감소 X
  decreaseQuantity : (index)=>{
    set((state)=>({
      cartItems : state.cartItems.map((item,i)=>
        i === index && item.quantity > 1 ? {...item, quantity : item.quantity - 1}: item
      )
    }))
  },

  // 함수 : () => {} 형식
  // 토글이 해제되면 계산에서 제외
  toggleItemChecked : (index) => {
    set((state)=>({
      cartItems : state.cartItems.map((item,i)=>
        i === index ? {...item, isChecked : !item.isChecked}: item
      )
    }))
  }
})))