// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavBarBootstrap from './components/NavBarBootstrap';
// import ItemCount from './components/ItemCount';
function App() {


  return (
    <>
    <NavBarBootstrap/>
    <ItemListContainer saludo='Bienvenidos a mi app'/>
    {/* <ItemCount stock={5}/> */}
    
    </>
  )
}

export default App
