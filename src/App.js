import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header'
import Pagina1 from './Components/Paginas/Pagina1'
import Pagina2 from './Components/Paginas/Pagina2'
import Pagina3 from './Components/Paginas/Pagina3'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Pagina1 />}  />
          <Route path="/pagina2" element={<Pagina2 />}  />
          <Route path="/pagina3" element={<Pagina3 />}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
