import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'

//import el componente arriba del componente
// import BotonMultiuso from "./examples/BotonMultiuso"
import NavBar from "./components/NavBar"
import NavBarBS from './components/NavBarBS';

function App() {

  // const saludar = ()=>{
  //   alert('Holis')
  // }
  //  const despedir = ()=>{
  //   alert('Chau')
  // }
  //    const comprar = ()=>{
  //   alert('Gracias por tu compra')
  // }
console.log('App')
  return (
    <>
    {/* <NavBar/> */}
    <NavBarBS/>
    <ItemListContainer mensaje='Bienvenidos a mi shop! 🥳'/>
    {/* NO ENTRA EN LA PRIMER PRE ENTREGA EL ITEMCount */}
    <ItemCount stock={10}/>
      {/* <BotonMultiuso color='red' onClickFunction={saludar} text='Hola'/>
      <BotonMultiuso color='green' onClickFunction={despedir} text='Chau'/>
      <BotonMultiuso color='yellow' onClickFunction={comprar} text='Comprar'/>
      <BotonMultiuso /> */}
    </>
 
  )
}

export default App
