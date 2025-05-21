import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import ButtonMultiuso from "./examples/ButtonMultiuso"
import Contador from './examples/Contador'
function App() {
//  const styles = {
//   backgroundColor:'yellow',
//   padding:'1rem',
//   color:'black',
//   fontWeight:'bold'
//  }

//  const saludar = () =>{
//   alert('Hola!')
//  }

  return (
    <>
    <NavBar/>
    <ItemListContainer saludo='Bienvenidos a mi app'/>
     {/* <Contador/>
      <ButtonMultiuso texto={'Hace Click!'} styles={styles} handler={saludar}/>
      <ButtonMultiuso texto='Otro boton' cssStyle='mi-boton'/> */}
    </>
  )
}

export default App
