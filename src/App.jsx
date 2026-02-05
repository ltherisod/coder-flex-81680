import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import NavBarBS from './components/NavBarBS';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {


  
console.log('App')
  return (
    <>
   
    <NavBarBS/>
    <ItemListContainer mensaje='Bienvenidos a mi shop! 🥳'/>
    <ItemDetailContainer/>
    </>
 
  )
}

export default App
