import logo from "./logo.svg";
import "./App.css";
//import Greeting from './components/pure/greeting';
//import Greetingf from './components/pure/greetingF';
import TaskListComponent from "./components/container/task_list";
import ComponentA from "./components/pure/componentA";
import Ejemplo1 from "./hooks/Ejemplo1";
import Ejemplo2 from "./hooks/Ejemplo2";
import Ejemplo4 from "./hooks/Ejemplo4";
import MiComponenteConContexto from "./hooks/Ejemplo3";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name={"Martín"}></Greeting> */}
        {/* Componente de ejemplo funcional */}
        {/* <Greetingf name="Martín"></Greetingf> */}
        {/* Componente de Listado de Tareas */}
        {/**/}
        {/* <TaskListComponent></TaskListComponent>*/}
        {/* <ComponentA></ComponentA>*/}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        <Ejemplo4 nombre={"Andres"}>
          {/* Todo lo que hay aquí es tratado como props.children */}
          <h3>Contenido del props.children</h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
