import { useState, useEffect } from "react"
import { getProducts } from "../mock/asyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Loader from './Loader'

const ItemListContainer = ({mensaje})=>{
    const [data, setData]= useState([])
    const [loading, setLoading]= useState(false)
    const {type} = useParams()
    console.log(type)
    // const {mensaje}=props

    // console.log(getProducts(), 'promesa')
    // getProducts().then((res)=> console.log(res, 'respuesta'))

    useEffect(()=> {
        setLoading(true)
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
        .finally(()=> setLoading(false))
    },[type])

    // console.log(data)
    return(
        <>
        {
            loading 
            ? <Loader text={type ? 'Cargando Categoría...' : 'Cargando Productos...'}/>
            : <div>
           
            <h1>{mensaje}{type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
            
            <ItemList data={data}/>
        </div>
        }
        </>
    )
}
export default ItemListContainer