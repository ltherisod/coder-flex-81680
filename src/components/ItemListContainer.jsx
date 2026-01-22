import { useState, useEffect } from "react"
import { getProducts } from "../mock/asyncMock"
import ItemList from "./ItemList"

const ItemListContainer = ({mensaje})=>{
    const [data, setData]= useState([])
    console.log('ItemListContainer')
    // const {mensaje}=props

    // console.log(getProducts(), 'promesa')
    // getProducts().then((res)=> console.log(res, 'respuesta'))

    useEffect(()=> {
        getProducts()
        .then((res)=> setData(res))
        .catch((error)=> console.error(error))
    },[])

    console.log(data)
    return(
        <div>
            <h1>{mensaje}</h1>
            {/* {data.map((producto)=> <p key={producto.id}>{producto.name}</p>)} */}
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer