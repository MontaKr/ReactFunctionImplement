import { Route, Routes } from "react-router-dom";
import MainPage from "../page/MainPage";
import SecondPage from "../page/SecondPage";
import ThirdPage from "../page/ThirdPage";


const route = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/second" element={<SecondPage />} />
      <Route path="/third" element={<ThirdPage />} />
    </Routes>
  );
};

export default route;
