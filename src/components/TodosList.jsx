import { useSelector } from "react-redux";
import styled from "styled-components";
import TodosItem from "./TodosItem";

function TodosList() {
  const { todos } = useSelector((state) => state);
  const total = todos.length;
  const donecount = todos.filter((todo) => todo.done).length;

  return (
    <ul>
      <Process>
        완료 : {donecount}/{total}
      </Process>
      {todos.map((todo) => (
        <TodosItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

const Process = styled.p`
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export default TodosList;
