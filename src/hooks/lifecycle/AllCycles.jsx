import React, {useEffect} from 'react'

export const AllCycles = () => {

    useEffect(() =>{
        console.log('Componente Credado')
        document.title = `${new Date()}`
        const intervalID = setInterval(() => {
            console.log('Actualizacion del componente.')
    }, 1000);
        return () => {            
            console.log('Componente Credado')
            document.title = 'El tiempo se ha detenido.';
            clearInterval(intervalID);
        }
    }, []);

    return (
    <div>
        <h1>AllCycles</h1>
    </div>
  );
}
