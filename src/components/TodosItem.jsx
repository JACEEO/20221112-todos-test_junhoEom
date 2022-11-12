import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeTodos, toggleTodos } from "../state/reducer/todos";

function TodosItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <Block>
      <span
        style={{
          cursor: "pointer",

          textDecoration: todo.done && "line-through",
        }}
        onClick={() => dispatch(toggleTodos(todo.id))}
      >
        {todo.text}
      </span>

      <RemoveButton onClick={() => dispatch(removeTodos(todo.id))}>
        Don't Do
      </RemoveButton>
    </Block>
  );
}

const Block = styled.div``;

const RemoveButton = styled.button`
  margin-left: 20px;
  top: 50%;
  background-color: #0a0a23;
  color: #fff;
  border: none;
`;

export default TodosItem;
