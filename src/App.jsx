import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <>
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer message="¡Bienvenido al sitio de Vinilos!" />}/>
      <Route path='/category/:categoryId' element={<ItemListContainer message="Listado de productos" />}/>
      <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
    </>
  
  );
};

export default App;
