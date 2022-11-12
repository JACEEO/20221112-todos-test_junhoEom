const ADD_TODOs = "ADD_TODOS";
const TOGGOLE_TODOs = "TOGGLE_TODOS";
const REMOVE_TODOs = "REMOVE_TODOS";

let nextId = 0;

export const addTodos = (text) => {
  return {
    type: "ADD_TODOS",
    id: nextId++,
    text,
  };
};

export const toggleTodos = (id) => {
  return {
    type: "TOGGLE_TODOS",
    id,
  };
};

export const removeTodos = (id) => {
  return {
    type: "REMOVE_TODOS",
    id,
  };
};

export default function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODOS":
      return state.concat({ id: action.id, text: action.text, done: false });
    case "TOGGLE_TODOS":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE_TODOS":
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
}
