import React, {useContext, useState} from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


const ItemDetail = ({detail}) => {
  const { addItem} = useContext(CartContext)
  const [purchase, SetPurchase]= useState(false)

  const onAdd = (cantidad)=>{
    console.log(`Agregaste del  ${detail.name},  ${cantidad} unidades`)
    addItem(detail, cantidad)
    SetPurchase(true)
  }
  return (
    <div style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
      }}>
        <h1>Detalle del: {detail.name}</h1>
        <img src={detail.img} alt={detail.name}/>
        <p>{detail.description}</p>
        <p>${detail.price},00</p>
        <p>Stock disponible: {detail.stock} unidades</p>
       {purchase 
       ? <Link to='/cart' className='btn btn-dark'>Ir al Carrito</Link>
       : <ItemCount stock={detail.stock} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail