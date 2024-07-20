import { createContext, ReactNode, useContext, useState } from "react";
export type TodosProviderProps = {
  children: ReactNode;
};
export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};
export type TodosContext = {
  todos: Array<Todo>;
  handleAddToDo: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};
export const todosContext = createContext<TodosContext | null>(null);


export const TodosProvider = ({ children }: TodosProviderProps) => {

  const [todos, setTodos] = useState<Array<Todo>>(() => {
    try {
      const newTodos = localStorage.getItem("todos") || "[]" ; 
      return JSON.parse(newTodos) as Array<Todo> ; 
    }
    catch(err) {
        return [] ; 
    }
  });

  const handleAddToDo = (task: string) => {
    setTodos((prevData) => {
      const newTodos: Array<Todo> = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prevData,
      ];
      console.log("MyprevData:", prevData);
      console.log("MynewDate :", newTodos);
      localStorage.setItem("todos" , JSON.stringify(newTodos)) ;
      return newTodos;
    });
  };

  //mark completed  ...
  const toggleTodoAsCompleted = (id: string) => {
    setTodos((prev) => {
      let newTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos" , JSON.stringify(newTodos)) ;
      return newTodos;
    });
  };

  // delete the individuals data

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => {
      let newTodos = prev.filter((filterdo) => {
        return filterdo.id !== id  ; 
      })
      localStorage.setItem("todos" , JSON.stringify(newTodos)) ;
      return newTodos;
    });
  };

  return (
    <todosContext.Provider
      value={{ todos, handleAddToDo, toggleTodoAsCompleted, handleDeleteTodo }}
    >
      {children}
    </todosContext.Provider>
  );
};

// consumer  ..............

export const useTodos = () => {
  const todosConsumer = useContext(todosContext);
  if (!todosConsumer) {
    throw new Error("use todos used outside of provide");
  }
  return todosConsumer;
};
