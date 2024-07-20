import AddToDO from "./components/AddToDO";
import Todos from "./components/Todos";
import { Navbar } from "./components/navbar";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>TODO REACT + TYPESCRIPT</h1>
      <Navbar />
      <AddToDO />
      <Todos />
    </div>
  );
};

export default App;
