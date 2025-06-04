// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavBarBootstrap from './components/NavBarBootstrap';
import FetchCountry from './examples/FetchCountry';
import FetchApi from './examples/FetchApi';
import withLogging from './hocs/withLogging';
import MiComponente from './examples/MiComponente';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
const MiComponenteConHoc = withLogging(MiComponente)

  return (
    <>
    <NavBarBootstrap/>
    {/* <FetchCountry/>
    <FetchApi/>
    <MiComponenteConHoc mensaje='Holis miren estoy usando un HOC 🤭'/>
    <MiComponente mensaje='No estoy usando un HOC '/> */}
    {/* <ItemListContainer saludo='Bienvenidos a mi app'/> */}
    <ItemDetailContainer/>
    </>
  )
}

export default App
