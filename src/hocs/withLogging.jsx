import { useEffect } from "react"

//funcion  HOC
const withLogging = (WrappedComponent) =>{
    //Este es el nuevo componente que se crea
    const ComponentWithLogging = (props) => {

        //Este efecto se ejecuta cuando el componente aparece en pantalla
        useEffect(()=>{
            console.log(`${WrappedComponent.name} se montó! 🥳`)
        },[])

        //Mostrando el componente original con tudas sus props
        return <WrappedComponent {...props}/>
    }

    //Devolvemos el nuevo componente
    return ComponentWithLogging
}

export default withLogging