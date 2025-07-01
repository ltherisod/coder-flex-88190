// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavBarBootstrap from './components/NavBarBootstrap';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
//para dar acceso a los componentes
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
// import Checkout from './components/Checkout';
import CheckoutHook from './components/CheckoutHook';
function App() {
//envuelvo los componentes para que tengan acceso
  return (
    <BrowserRouter>
    <CartProvider>
    <NavBarBootstrap/>
    <Routes>
      <Route path='/' element={ <ItemListContainer saludo='Bienvenidos a mi app'/>}/>
      <Route path='/category/:categoryId' element={ <ItemListContainer saludo='Estas en la categoria:'/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<CartContainer/>}/>
      <Route path='/checkout' element={<CheckoutHook/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App
