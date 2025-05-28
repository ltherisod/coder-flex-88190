const productos=[
    {
        id:'01',
        name:'Random 1',
        description:'lorem lorem lorem',
        stock:50,
        price:2000,
        category:'nuevos',
        img:'https://picsum.photos/200'
    },
    {
        id:'02',
        name:'Random 2',
        description:'lorem lorem lorem',
        stock:20,
        price:5000,
        category:'ofertas',
        img:'../random-1.png'
    },
     {
        id:'03',
        name:'Random 3',
        description:'lorem lorem lorem',
        stock:10,
        price:15000,
        category:'mas vendidos',
        img:'https://picsum.photos/206'
    },
    {
        id:'04',
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