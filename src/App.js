import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header';
import { GlobalStyle } from './styles/global';
import {Home} from './Components/Home/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}  />
      
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
