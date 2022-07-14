/**
 * Ejemplo de uso de :
 * - useState()
 * - useRef()
 * - useEffect()
 */
import React, { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {
  // Vamos a crear dos contadores distintos
  //cada uno en un estado diferente
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  // Vamos a crear una referencia con useRef() para asociar una variable
  //con un elemento del DOM del componente (vista HTML)
  const miRef = useRef();

  function incrementar1() {
    setContador1(contador1 + 1);
  }

  function incrementar2() {
    setContador2(contador2 + 1);
  }

  /**
   * Trabajando con useEffect()
   */

  /**
   * ? Caso1: Ejecutar SIEMPRE un snippet de código
   * Cada vez que haya un cambio en el estado del componente
   * se ejecuta aquello que esté dentro del useEffect()
   */
  // useEffect(() => {

  //     console.log('Mostrando Referencia del ESTADO del componente')
  //     console.log('Mostrando Referencia del ESTADO del componente en el DOM:')
  //     console.log(miRef)
  // })

  /**
   * ? Caso2: Ejecutar solo cuando CAMBIE EL CONTADOR1
   * Cada vez que haya un cambio en contador1, se ejecuta lo que diga el useEffect()
   * En caso de que cambie contador2 no habra ejecución
   */
  //  useEffect(() => {
  //     console.log('Cambio del ESTADO del componente')
  //     console.log(miRef)
  // }, [contador1]);

  /**
   * ? Caso3: Ejecutar cuando CAMBIE EL CONTADOR1 o el CONTADOR2
   * Cada vez que haya un cambio en contador1, se ejecuta lo que diga el useEffect()
   * Cada vez que haya un cambio en contador2, se ejecuta lo que diga el useEffect()
   */
  useEffect(() => {
    console.log("Cambio del ESTADO del componente");
    console.log(miRef);
  }, [contador1, contador2]);

  return (
    <div>
      <h1>*** Ejemplo de useState(), useRef() y useEffect()***</h1>
      <h2>Contador 1: {contador1}</h2>
      <h2>Contador 2: {contador2}</h2>
      {/* Elemento referenciado */}
      <h4 ref={miRef}>Ejemplo de elmento referenciado.</h4>

      <div>
        <button onClick={incrementar1}>Incrementar Contador1</button>
      </div>
      <div>
        <button onClick={incrementar2}>Incrementar Contador2</button>
      </div>
    </div>
  );
};
export default Ejemplo2;
