import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({detail}) => {
  const onAdd = (cantidad)=>{
    console.log(`Agregaste del  ${detail.name},  ${cantidad} unidades`)
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
        <ItemCount stock={detail.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail