import { Route, Routes } from "react-router-dom";
import MainPage from "../page/MainPage";
import CartMainPage from "../page/cart/CartMainPage";

const routes = () => {

  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/cart" element={<CartMainPage/>}/>
    </Routes>
  )
}

export default routes