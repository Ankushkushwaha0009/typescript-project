import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TodosProvider } from "./store/todos.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  
  <TodosProvider>
    <App />
  </TodosProvider>
  </BrowserRouter>
);
