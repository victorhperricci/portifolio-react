import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { AnimatePresence } from "framer-motion";

import Header from "./Components/Header/Header";
import { Home } from "./Components/Views/HomePage/Home/Home";
import ButtonToTop from "./Components/Button/ButtonToTop";
import Footer from "./Components/Footer/Footer";
import UserContext from "./Context/UserContext";
import Sobre from "./Components/Views/Sobre/Sobre";
import Projetos from "./Components/Views/Projetos/Projetos";
import Contato from "./Components/Views/Contato/Contato";

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
              <Route path="/projetos" element={<Projetos />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </AnimatePresence>
          {/* <Footer /> */}
        </UserContext>
      </BrowserRouter>
    </>
  );
}

export default App;
