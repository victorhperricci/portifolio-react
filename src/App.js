import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import { GlobalStyle } from "./styles/global";
import { Home } from "./Components/Home/Home";
import ButtonToTop from "./Components/Button/ButtonToTop";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <ButtonToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
