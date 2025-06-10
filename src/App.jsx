// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavBarBootstrap from './components/NavBarBootstrap';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {


  return (
    <>
    <NavBarBootstrap/>
    <ItemListContainer saludo='Bienvenidos a mi app'/>
    <ItemDetailContainer/>
    </>
  )
}

export default App
