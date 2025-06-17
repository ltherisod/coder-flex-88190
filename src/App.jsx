// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavBarBootstrap from './components/NavBarBootstrap';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
function App() {

  return (
    <BrowserRouter>
    <NavBarBootstrap/>
    <Routes>
      <Route path='/' element={ <ItemListContainer saludo='Bienvenidos a mi app'/>}/>
      <Route path='/category/:categoryId' element={ <ItemListContainer saludo='Estas en la categoria:'/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
