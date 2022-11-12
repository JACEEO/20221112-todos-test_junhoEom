import styled from "styled-components";
import TodosCreate from "./TodosCreate";
import TodosList from "./TodosList";

function Todos() {
  return (
    <TodosBlock>
      <h2>Todos List</h2>
      <TodosCreate />
      <TodosList />
    </TodosBlock>
  );
}

const TodosBlock = styled.div`
  width: 100%;
  height: 500px;

  flex: 1;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export default Todos;
