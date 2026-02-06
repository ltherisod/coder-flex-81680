import { useState, useEffect } from "react"
import { getProducts } from "../mock/asyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Input from "../examples/Input"

const ItemListContainer = ({mensaje})=>{
    const [data, setData]= useState([])
    const {type} = useParams()
    console.log(type)
    // const {mensaje}=props

    // console.log(getProducts(), 'promesa')
    // getProducts().then((res)=> console.log(res, 'respuesta'))

    useEffect(()=> {
        getProducts()
        .then((res)=> {
            if(type){
                //filtrar
                setData(res.filter((prod)=> prod.category === type))
            }else{
                setData(res)
            }
        })
        .catch((error)=> console.error(error))
    },[type])

    // console.log(data)
    return(
        <div>
            {/* <Input/> */}
            <h1>{mensaje}{type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
            {/* {data.map((producto)=> <p key={producto.id}>{producto.name}</p>)} */}
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer