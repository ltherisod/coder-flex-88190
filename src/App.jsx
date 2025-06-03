// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavBarBootstrap from './components/NavBarBootstrap';
function App() {


  return (
    <>
    <NavBarBootstrap/>
    <ItemListContainer saludo='Bienvenidos a mi app'/>
    </>
  )
}

export default App
