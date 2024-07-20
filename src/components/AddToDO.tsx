import { FormEvent, useState } from "react";
import { useTodos } from "../store/todos";

const AddToDO = () => {
  const { handleAddToDo } = useTodos();
  const [todo, setToDO] = useState("");
  const handleformSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddToDo(todo);
    setToDO("");
  };

  return (
    <form onSubmit={handleformSubmit}>
      <input
        type="text"
        name=""
        value={todo}
        onChange={(e) => setToDO(e.target.value)}
      />
      <button> Add </button>
    </form>
  );
};

export default AddToDO;
