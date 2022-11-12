import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todos from "./reducer/todos";

const rootReducer = combineReducers({
  todos,
});

export const store = configureStore({
  reducer: rootReducer,
});
