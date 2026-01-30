import { useEffect } from "react"

//HOC = FUNCION
export const withLogging = (WrappedComponent)=>{
    //es el nuevo componente que se crea 
    const ComponentWithLogging = (props)=> {

        //es la nueva funcionalidad que le doy con el HOC
        useEffect(()=>{
            console.log(`${WrappedComponent.name} se montó! 🥳`)
        },[])

        //Mostar el componente original con todas sus props
        return (
            <WrappedComponent {...props}/>
        )
    }
//retornar el nuevo componente
    return ComponentWithLogging
}