import { Routes, Route, BrowserRouter, useLocation, Router } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import {AnimatePresence} from 'framer-motion'


import Header from "./Components/Header/Header";
import { Home } from "./Components/Views/HomePage/Home/Home";
import ButtonToTop from "./Components/Button/ButtonToTop";
import Footer from "./Components/Footer/Footer";
import UserContext, { UserStorage } from "./Context/UserContext";
import { useContext } from "react";
import Sobre from "./Components/Views/Sobre/Sobre";

function App() {

  return (
    <>
      <BrowserRouter>
        <UserContext>
          <GlobalStyle />
          <ButtonToTop />
          <Header />
          <AnimatePresence>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
              </Routes>
          </AnimatePresence>
          <Footer />
        </UserContext>
      </BrowserRouter>
    </>
  );
}

export default App;
