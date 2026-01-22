const productos = [
    {
        id:'01',
        name:'Random 1',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.",
        stock:20,
        price:25000,
        category: 'nuevos',
        img:'https://picsum.photos/200'
    },
     {
        id:'02',
        name:'Random 2',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.",
        stock:40,
        price:155000,
        category: 'mas vendidos',
        img:'../img/darth-vader.png'
    },
      {
        id:'03',
        name:'Random 3',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.",
        stock:25,
        price:55000,
        category: 'ofertas',
        img:'https://i.postimg.cc/jjvfKpx6/D-NQ-NP-2X-790947-MLU74201862127-012024-F.webp'
    },
     {
        id:'04',
        name:'Random 4',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.",
        stock:21,
        price:75000,
        category: 'ofertas',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjEgjGu7SUxB4Ggx9sAYNoW5X4xQnO1E-WOA&'
    }
]

let error = false
export const getProducts = ()=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                //algo pasó y no se resuleve
                reject('⚠️ Hubo un error, intente más tarde ⚠️')
            }else{
                //sale todo bien y se resuelve
                resolve(productos)
            }
        },3000)
    })
}
