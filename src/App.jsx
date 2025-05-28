// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavBarBootstrap from './components/NavBarBootstrap';
import BoxChildren from './examples/BoxChildren';
import ItemCount from './components/ItemCount';
function App() {


  return (
    <>
    <NavBarBootstrap/>
    <ItemListContainer saludo='Bienvenidos a mi app'/>
    {/* <ItemCount stock={5}/> */}
    <BoxChildren titulo='holis'/>
    <BoxChildren>
      <p>Hola yo soy una children</p>
    </BoxChildren>
    <BoxChildren>
      <ItemCount stock={5}/>
    </BoxChildren>
    <BoxChildren>
      <p>Yo tmb soy una children!</p>
      <img src='../random-1.png' alt='img'/>
    </BoxChildren>
     <BoxChildren>
      Yo igual soy una children
    </BoxChildren>
    </>
  )
}

export default App
