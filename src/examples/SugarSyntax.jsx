//Spread Operator

//Antes
const numeros =[1,2,3]
const numeroNuevos=[4,5,6]
const numeroFinal= numeroNuevos.concat(numeroNuevos)

//Ahora

const numerosSugar=[...numeros, ...numeroNuevos,7,8,9,10]

//Destructuring

const persona = {
    nombre:'Andres',
    mail:'andres@gmail.com',
    edad: 18
}
console.log(persona.nombre)

const {nombre, edad}=persona

const colores = ['rojo', 'violeta', 'verde']

console.log(colores[2])

const [primero, segundo, tercero] = colores

console.log(primero)


let mensajeJS;
if(edad > 18){
    console.log('mayor')
   mensajeJS= 'sos mayor'
}else{
    console.log('menor')
    mensajeJS= 'sos menor'
}

const mensaje = edad > 18 ? 'sos mayor' : 'sos menor'

console.log('Hola '+nombre)

console.log(`Hola ${nombre}`)