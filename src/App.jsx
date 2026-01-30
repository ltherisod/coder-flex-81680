import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import NavBarBS from './components/NavBarBS';
import FetchCountry from './examples/FetchCountry';
import FetchApi from './examples/FetchApi';
//HOC
import { withLogging } from './hocs/withLogging';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  const FetchApiHOC = withLogging(FetchApi)
  const ItemListContHOC = withLogging(ItemListContainer)
  
console.log('App')
  return (
    <>
   
    <NavBarBS/>
    {/* <FetchApiHOC/> */}
    {/* <FetchApi/> */}
    {/* <ItemListContHOC mensaje='Miren soy un HOC'/> */}
    <ItemListContainer mensaje='Bienvenidos a mi shop! 🥳'/>
    <ItemDetailContainer/>
    {/* <FetchCountry/> */}
     
    </>
 
  )
}

export default App
