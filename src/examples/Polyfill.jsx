//Verificar si el navegador NO tiene el metodo includes
if(!Array.prototype.includes){
    //Si no existe, lo agregamos al prototipo de Array
    Array.prototype.includes = function (elementoBuscado){
        //Recorrer el array 
        for(let i= 0; i< this.length; i++){
            //Comparamos el elemento actual con el buscado usando comparacion estricta
            if(this[i] === elementoBuscado){
                //si lo encontramos
                return true
            }
        }
        return false
    }
}