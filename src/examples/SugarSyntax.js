//SPREAD OPERATOR (...)

const numbers = [1,2,3]
const numeroNuevos = numbers.concat([4,5,6]) //[1,2,3,4,5,6]

//Spread
const sugarNumeros = [...numbers,4,5,6,7,8,9,10] //[1,2,3,4,5,6,7,8,9,10]


//Destructuring 

//ARRAYS

const colores = ['rojo', 'amarillo', 'violeta']

const colorAmarillo = colores[1]
const colorRojo = colores[0]
const colorVioleta = colores[2]

//sugAR

const [ ,  , tercerColor] =colores
console.log(tercerColor)//violeta

//OBJETOS

const alumno = {
    nombre:'Juan',
    ciudad:'Mendoza',
    edad:25
}

console.log(alumno.nombre)

const {nombre, edad}= alumno


//CONDICIONAL

let mensaje;

if(edad >= 18 ){
    mensaje ='sos mayor de edad'
}else{
   mensaje= 'sos menor de edad'
}

//sugar

const sugarMensaje = edad >= 18 ? 'Sos mayor' : 'Sos menor'

//concatenacion de dato mas string

console.log('Hola '+nombre+' ¿Como estas')

console.log(`Hola ${nombre} ¿Cómo estas?`)


//arrowFunction

function sumar (a,b){
    return a+b
}

//arrow
const sumarArrow = (a,b)=> {
    //mas logica
    return a+b
}
const sumarArrowConParentesis = (a,b)=> (
 a+b
)
   

const sumarSuperArrow = (a,b)=>a+b