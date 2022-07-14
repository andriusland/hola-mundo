/**
 * Ejemplo de Hooks:
 * - useState()
 * - useContext()
 */
import React, { useState, useContext } from "react";

/**
 *
 * @returns Componente1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre.
 */

const miContexto = React.createContext(null);

const Componente1 = () => {
  // Iniciamos un estado vacio que a rellenarse
  // con los datos del padre
  const state = useContext(miContexto);

  return (
    <div>
      <h1>El token es: {state.token}</h1>
      {/* Pintamos el componente 2 */}
      <Componente2></Componente2>
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);

  return (
    <div>
      <h2>La sesión es: {state.sesion}</h2>
    </div>
  );
};

export default function MiComponenteConContexto() {
  const estadoInicial = {
    token: "12345",
    sesion: 1,
  };
  // Creamos el estado del componente
  const [sessionData, setSessionData] = useState(estadoInicial);

  function actualizarSesion() {
    setSessionData({
      token: "JDKEOLG",
      sesion: sessionData.sesion + 1,
    });
  }
  return (
    <div>
      <miContexto.Provider value={sessionData}>
        {/* Todo lo que está aquí dentro puede leer los datos de sessionData. */}
        {/* Además, si se actualiza, los componentesde aquí también lo actualizarán */}
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar Sesion</button>
      </miContexto.Provider>
    </div>
  );
}
