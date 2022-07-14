/**
 * Ejemplo de uso del método de ciclo de vida
 * en componente clase y el hook de ciclo de via
 * en componente funcional.
 */

import React, { Component, useEffect } from "react";

/**
 * Componente de tipo clase
 */
export class Didmount extends Component{
    componentDidMount() {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)')
    }
    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        )
    }
}

/**
 * Componente de tipo función usando el useEffect dejando los corchetes vacios
 * 
 */

export const DidMountHook = () => {
    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)')       
    /**
     * Si ponemos [] se ejecuta solo una vez
     * Si no se pone [] se ejecuta todas las veces 
     */
    }, [])

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    )
}