export const productos=[
  
    {
       
        name:'Random 2',
        description:'lorem lorem lorem',
        stock:20,
        price:5000,
        category:'ofertas',
        img:'../random-1.png'
    },
     {
       
        name:'Random 3',
        description:'lorem lorem lorem',
        stock:10,
        price:15000,
        category:'mas vendidos',
        img:'https://picsum.photos/206'
    },
    {
        
        name:'Random 4',
        description:'lorem lorem lorem',
        stock:12,
        price:18000,
        category:'mas vendidos',
        img:'https://picsum.photos/207'
    }
]


export const getProducts = () =>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error')
            }else{
                resolve(productos)
            }
        },3000)
    })
}
export const getOneProduct = (id) =>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error')
            }else{
                let product= productos.find((prod)=> prod.id === id)
                resolve(product)
            }
        },3000)
    })
}