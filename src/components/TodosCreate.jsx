import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodos } from "../state/reducer/todos";

function TodosCreate() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const createTodo = () => {
    dispatch(addTodos(input));
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleInput}
        placeholder="Please check your plan"
      />

      <CreateButton onClick={createTodo}>Do it!</CreateButton>
    </div>
  );
}

const CreateButton = styled.button`
  margin-left: 20px;
  top: 50%;
  background-color: #0a0a23;
  color: #fff;
  border: none;
`;
export default TodosCreate;
