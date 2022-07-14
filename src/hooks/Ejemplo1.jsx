/**
 *
 * Crear un componente de tipo función y acceder a su estado
 * privado a través de un hook y además poder modificarlo
 *
 */

import React, { useState } from "react";

const Ejemplo1 = () => {
  //Valor inicial para un contador
  const valorInicial = 0;
  //Valor inicial para una person
  const personaInicial = {
    nombre: "Ander",
    email: "mail@mail.com",
  };
  /**
   * Queremos que el VALORINICIAL y PERSONAINICIAL sean
   * parte del estado del componente para así poder gestionar
   * su cambio y que éste se vea reflejado en la vista del componente.
   */
  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  /**
   * Funcion para actualizar el estado privado que contiene el contador
   *
   */
  function incremetarContador() {
    //funcionParaCambiar(nuevoValor)
    setContador(contador + 1);
  }
  /**
   * Funcion para actualizar el estado de persona en el componente
   */
  function actualizarPersona() {
    setPersona({
      nombre: "Pepe",
      email: "pepe@mail.com",
    });
  }
  return (
    <div>
      <h1>Ejemplo de useState()</h1>
      <h2>Contador: {contador}</h2>
      <h2>Datos de persona:</h2>
      <h3>Nombre: {persona.nombre}</h3>
      <h3>Email: {persona.email}</h3>
      <button onClick={incremetarContador}>Incrementar Contador</button>
      <button onClick={actualizarPersona}>Actualizar Persona</button>
    </div>
  );
};

export default Ejemplo1;
