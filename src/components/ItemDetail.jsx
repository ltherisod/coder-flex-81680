import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({detail}) => {
  return (
    <div>
        <h1>Detalle del: {detail.name}</h1>
        <img src={detail.img} alt={detail.name}/>
        <p>{detail.description}</p>
        <p>${detail.price},00</p>
        <p>Stock disponible: {detail.stock} unidades</p>
        <ItemCount stock={detail.stock}/>
    </div>
  )
}

export default ItemDetail